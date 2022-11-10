import { Handle, Position } from "reactflow"
import { Container } from "../../components/container"
import { Typo } from "../../components/Texts"
import { boolean_background, boolean_background_dark, boolean_getnode, gray } from "../../styles/GlobalColors"

import {IoEnterOutline as EventIcon} from "react-icons/io5"

const BeginProgramNode = ({data}) => {
    
    const ExecuteNode = {
        top: 30, right: 3,  
    }
    
    return (
        <Container
            stack
            background="rgba(10, 10, 10, 0.8)"
            width="120px"
            height="50px"
            radius="5px"
            boxShadow="0px 0px 10px black"

        >
            <Container
                queue
                justify="start"
                align="center"
                height="15px"
                radius="5px 5px 0px 0px"
                linearStart="#840000"
                linearEnd="#CE0000"
            >
                <Container width="5px" margin={"10px 0px"} />
                <EventIcon size={10}/>
                <Typo 
                    size="8pt" 
                    weight={400}
                    margin="0px 1em"
                    >
                        Begin Program
                    </Typo>
            </Container>

            <Handle type="execute" position={Position.Right} style={ExecuteNode} />
            
        </Container>
    )
}

export default BeginProgramNode
