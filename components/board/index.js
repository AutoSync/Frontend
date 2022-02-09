import { Container } from "../Container";


export default function Board(props){
    return <Container 
    app
    width={props.width}
    >
        {props.children}
        
    </Container>
}
