import { Container } from "../components/container";

export default function Home(){
    return( 
    <Container  app
                stack
                padding="1em"
                justify="center"
                align="center"
                background="whitesmoke"
                >
        <Container width="250px"
                   height="250px"
                   padding="1em"
                   radius="10px"
                   boxShadow="0px 0px 10px #5555"
                   background="white"
                   color="black"
                   hcolor="blue"
                   size="10pt"
                   >
            <h1>Welcome to Frontend NextJS With styled-components</h1>
        </Container>

    </Container>
    )
}
