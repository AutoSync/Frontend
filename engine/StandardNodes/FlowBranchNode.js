import { Container } from "../../components/container"
import { Typo } from "../../components/Texts"

import {TbArrowFork as BranchIcon} from "react-icons/tb"
import { Handle, Position } from "reactflow"
import { Execute } from "../../styles/NodesStyles"


const FlowBranchNode = ({data}) => {
    
    return(
        <Container
            stack
            background="rgba(10, 10, 10, .8)"
            width="120px"
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
                <BranchIcon size={10} />
                <Typo 
                    size="8pt" 
                    weight={400}
                    margin="0px 1em"
                    >
                        Branch

                    </Typo>
            </Container>
            <Handle type="execute" position={Position.Left} style={ { top: 30, left: 5} } /> 
            <Handle type="boolean" position={Position.Left} style={ {top: 55, left: 5, borderColor: "red"} } >
                <Typo margin="0px 7px" size="6pt" weight={300} >Condition</Typo>
            </Handle>

            <Handle type="execute" position={Position.Right} style={ { top: 30, right: 5} } > 
                <Typo margin="0px -3em" size="6pt" weight={300}>True</Typo> 
            </Handle>
            <Handle type="execute" position={Position.Right} style={ { top: 55, right: 5} } > 
                <Typo margin="0px -3em" size="6pt" weight={300}>False</Typo> 
            </Handle>
        
        </Container>
    )
}

export default FlowBranchNode