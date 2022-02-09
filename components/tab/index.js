import { Container } from "../Container"
import { Typo } from "../Typo"
import { Hyper } from "../Hyper"

const Tab = (props) => {
    const isSelected = props.title == props.tag
    if (isSelected)
        return <Container
        queue
        borderLeft="5px solid black"
        background="rgba(0,0,0,0.05)"
        padding="10px 10px"
        justify="start"
        align="center"
        >
            {props.children}
            <Typo margin="0 1em" weigth="300" size="12pt">{props.title}</Typo>
        </Container>
    else
        return <Container
        queue
        margin="0 5px"
        padding="0 10px"
        justify="start"
        align="center"
        hoverBackground="rgba(0,0,0,0.05)"
        >
            {props.children}
            <Hyper 
             weigth="300" 
             size="12pt" 
             href={props.link || "/app/dashboard"}
             
             >
                 {props.title}
                 </Hyper>
        </Container>
}

export default Tab