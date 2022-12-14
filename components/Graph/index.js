import { useEffect, useRef, useState } from "react"
import { NodeColor, NodeId, NodeType, Ports, PortType, resolvePorts } from "../../engine/NodeConfig"


const Graph = (props) => {

    const canvasRef = useRef(null)
    const innerWidth = window.innerWidth
    const innerHeight = window.innerHeight
    const [nodes, setNodes] = useState(props.nodes)
    const [edges, setEdges] = useState(props.edges)

    useEffect(() => {
        
        let canvas = canvasRef.current
        let context = canvas.getContext('2d')

        canvas.width = innerWidth - 15
        canvas.height = innerHeight - 40

        let canvas_width = canvas.width
        let canvas_height  = canvas.height
        let shapes = nodes
        let connections = edges
        let edgePosition = [ {id: NodeId(4), startPos: {x: 0, y: 0 }, endPos: {x: 0, y: 0}} ]
        let currentShapeIndex = null
        let isDragging = false
        let startX
        let startY

        //Mouse in the Shape
        function is_mouse_in_shape(x, y, shape){

            let shapeLeft = shape.position.x
            let shapeRight = shape.position.x + shape.width
            let shapeTop = shape.position.y
            let shapeBottom = shape.position.y + shape.height 


            let canmove = x > shapeLeft && x < shapeRight && y > shapeTop && y < shapeBottom
            let in_connections = true
            if(canmove)
            {
                return true
            }

            return false
        }
        //Event mouse click
        function mouseDown(e){
            e.preventDefault()
            
            startX = parseInt( e.clientX )
            startY = parseInt( e.clientY )

            let index = 0
            shapes.forEach( (shape) => {
                if(is_mouse_in_shape(startX, startY, shape)){
                    currentShapeIndex = index
                    isDragging = true
                    return
                }else{
                    isDragging = true
                }
                
                index++
            } )
        }
        //Mouse Click Up
        function mouseUp(e){

            if(!isDragging)
            {
                return
            }

            e.preventDefault()
            isDragging = false
            console.log('Mouse up in X:', parseInt(e.clientX), ' Y: ', parseInt(e.clientY) )
    
        }
        //Mouse Click Down
        function mouseOut(e){

            if(!isDragging)
            {
                return
            }

            e.preventDefault()
            isDragging = false
        }
        //Mouse Move
        function mouseMove(e){
            
            if(!isDragging){
                return
            }else {
                e.preventDefault()

                let mouseX = parseInt(e.clientX)
                let mouseY = parseInt(e.clientY)

                let dx = mouseX - startX
                let dy = mouseY - startY

                let currentShape = shapes[currentShapeIndex]
                if(currentShape)
                {
                    currentShape.position.x += dx
                    currentShape.position.y += dy
                }
                console.log('Node: ', currentShape.id , ' Move X: ', currentShape.position.x , ' Move Y: ', currentShape.position.y )
                draw_shapes()

                processEdges()
                

                startX = mouseX
                startY = mouseY
            }

        }

        //Register Events
        canvas.onmousedown = mouseDown
        canvas.onmouseup = mouseUp
        canvas.onmouseout = mouseOut
        canvas.onmousemove = mouseMove
        
        //Create Connections
        function createConnection(node1, node2, animation){
            id1 = node1.outputs.exec.id
            id2 = node2.inputs.exec.id
            return { start: id1, end: id2, animated: animation }
        }

        //Processing Edges and connect to nodes
        function processEdges(){
            
            edges.map( (edge) => {

                let start = { x: 0, y: 0}
                let end = { x: 0, y: 0}

                edgePosition.push( {id: 0, startPos: {x: 0, y: 0}, endPos: {x: 0, y: 0} } )

                shapes.map((node, index) => {

                    if(node.inputs)
                    {
                        let inpts = node.inputs
                        console.log('node input length -> ', inpts.length)
                        inpts.forEach((input) => {

                            if(input.id == edge.end)
                            {
                                end = input.position
                                console.log('capture end position')
                            }else{
                                console.log('dont match -> ', input.id, ' with -> ', edge.end)
                            }
                        })


                    }else{                 
                        console.log('the node: ', node.id, ' has no inputs')
                    }
                    
                    if(node.outputs)
                    {
                        let outs = node.outputs
                        console.log('node outputs length -> ', outs.length)

                        outs.forEach((out) => {

                            if(out.id == edge.start)
                            {
                                start = out.position
                                console.log('capture start position')
                            }else{
                                console.log('dont match -> ', out.id, ' with -> ', edge.start)
                            }
                        })

                    }else{
                        console.log('the node: ', node.id, ' has no outputs')
                    }
                    
                    
                    edgePosition[index] =  { id: NodeId(6),  startPos: start, endPos: end } 
                });

                edgePosition.map( (edge) => console.log('Positions', edge) )

            })
        
        }

        function processNode(){
            

            
            
        }

        function CompileProgram(){ }
        //Draw Objects
        function draw_shapes(){
            
            //Clear
            context.clearRect(0,0, canvas_width, canvas_height)

            shapes.forEach( (shape) => {
                
                //Get Colors 
                let nodeColors = NodeColor(shape.type)

                //Node Frame
                context.fillStyle = shape.background? shape.background : nodeColors.background
                context.fillRect(shape.position.x, shape.position.y, shape.width? shape.width : 200, shape.height? shape.height : 50)
                //context.roundRect(shape.position.x, shape.position.y, shape.width? shape.width : 200, shape.height? shape.height : 50, 5)
                
                //Title Bar 
                if(shape.title)
                {

                    context.fillStyle = shape.title?.background? shape.title.background : nodeColors.title
                    context.fillRect(shape.position.x, shape.position.y, 
                                     shape.width, shape.title?.height? shape.title.height : 30)
                    //Title Text
                    context.font = shape.title?.font? shape.title.font : "15px Roboto"
                    context.fillStyle = shape.title?.color? shape.title.color : "white"
                    context.textAlign = "left"
                    context.fillText( shape.title?.label? shape.title.label : "",
                                      shape.title?.position?.x? shape.title.position.x + shape.position.x : shape.position.x + 10,
                                      shape.title?.position?.y? shape.title.position.y + shape.position.y : shape.position.y + 20,
                                    )
                }

                if(shape.inputs)
                {
                    let inputs = shape.inputs
                    let s = 0
                    let x = shape.position.x
                    let y = shape.position.y

                    inputs.map( (input) => {
                        console.log("Inputs: ", input)
                        let port = resolvePorts(input.type)
                        let position = { x: 0, y: 0 }

                        if( input.type == Ports.exec )
                        {
                            position = { x: x + 10, y:  y + 40 + s }
                            console.log(input.type)
                            context.fillStyle = "white"
                            context.fillRect(position.x, position.y, 20, 20)

                        }else {
                            position = { x: x + 20 , y: y + 50 + s }
                            context.beginPath()
                            context.arc(position.x, position.y, 7, 0, 2 * Math.PI)
                            context.strokeStyle = port.color;
                            context.stroke();
                        }

                        s += 30
                        context.font = "10px Roboto"
                        context.fillStyle = "white"
                        context.textAlign = "left"
                        context.fillText( input.label, x + 40, y + 25 + s)
                        
                    })
                }

                if(shape.outputs)
                {
                    let outputs = shape.outputs
                    let s = 0
                    let x = shape.position.x
                    let y = shape.position.y
                    let w = shape.width
                    
                    outputs.map( (output) =>{
                        
                        let port = resolvePorts(output.type)
                        let position = output.position

                        context.font = "10px Roboto"
                        context.fillStyle = "white"
                        context.textAlign = "right"
                        context.fillText( output.label, x + w - 40, y + 55 + s)
                      
                        if(output.type == Ports.exec){
                            output.position = { x: x + w - 30, y: y + 40 + s }
                            position = output.position

                            context.fillStyle = "whitesmoke"
                            context.fillRect(position.x , position.y, 20, 20)
                            
                        }else{
                            output.position = { x: x + w - 20, y: y + 50 + s }
                            position = output.position

                            context.beginPath()
                            context.arc(position.x, position.y, 7, 0, 2 * Math.PI)
                            context.strokeStyle = port.color;
                            context.stroke();
                        }
                        s += 30

                    } )
                }

 
            })

            drawEdges()
        }
        
        const drawEdges = () => {
            
            edgePosition.map( (edge) => {

            
                context.beginPath()
                context.moveTo(edge.end.x, edge.end.y)
                context.lineTo(edge.start.x, edge.start.y)
                context.stroke()
                context.closePath()
            })
        }


        processNode()
        processEdges()
        draw_shapes()
        drawEdges()

        props.nodeChanges(shapes)
        props.edgesChanges(connections)

    }, [])

    return <canvas ref={canvasRef} {...props} style={{ backgroundImage: "repeating-linear-gradient(#474646 0 1px, transparent 1px 100%), repeating-linear-gradient(90deg, #474646 0 1px, #252525 1px 100%)",
                                                       backgroundSize: '20px 20px' }} />
        

}

export default Graph