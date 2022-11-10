import { Container } from "../../components/container"
import { Typo } from "../../components/Texts"

import {ImLoop as LoopIcon } from "react-icons/im"
import { Handle, Position } from "reactflow"
import { Execute } from "../../styles/NodesStyles"
import { black_80, number_background } from "../../styles/GlobalColors"


const FlowForNode = ({data}) => {
    return(
        <Container
            stack
            background="rgba(10, 10, 10, 0.8)"
            width="130px"
            height="70px"
            radius="5px"
            boxShadow="0px 0px 10px black"
        >
            <Container
                queue
                justify="start"
                align="center"
                height="15px"
                radius="5px 5px 0px 0px"
                linearStart="#616161"
                linearEnd="#777777"
            >
                <Container width="5px" margin={"10px 0px"} />
                <LoopIcon size={10} />
                <Typo 
                    size="8pt" 
                    weight={400}
                    margin="0px 1em"
                    >
                        For Loop
                    </Typo>

            </Container>

            <Handle type="execute"  position={Position.Left} style={ { top: 30, left: 5} }/>
            <Handle type="number"  position={Position.Left} style={ { top:40, left: 5, borderColor: number_background } }>
                <Typo margin="0px 1em" size="6pt" width="50px">First Index</Typo>
            </Handle>

            <Handle type="number"  position={Position.Left} style={ { top:55, left: 5, borderColor: number_background } }>
                <Typo margin="0px 1em" size="6pt" width="50px">Last Index</Typo>
            </Handle>


            <Handle type="execute" position={Position.Right} style={ { top: 30, right: 5} } >
                <Typo margin="0px -5em" size="6pt" width="50px">Loop Body</Typo>
            </Handle>
            <Handle type="number" position={Position.Right} style={{ top: 40, right: 5, borderColor: number_background }} >
                 <Typo margin="0px -3em" size="6pt" width="50px">Index</Typo>
            </Handle>
            <Handle type="execute" position={Position.Right} style={{ top: 55, right: 5}} >
                 <Typo margin="0px -5em" size="6pt" width="50px">Complete</Typo>
            </Handle>

        </Container>
    )
}

export default FlowForNode