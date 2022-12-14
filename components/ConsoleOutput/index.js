import { useState } from "react"
import { Container } from "../container"






const ConsoleOutput = (props) => {

    const [data, setData ] = useState(props.data)
    //const [processed, setProcessed] = useState(props.processed)

    return (
        <Container>
            <Container
            
                height="50px"
            >
                
            </Container>
                <button onClick={props.Action}>Compile</button>
            <Container>
                <p>{ data == undefined? "No input added to output" : data }</p>
            </Container>

        </Container>
    )
}

export default ConsoleOutput