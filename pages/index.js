import { Container } from '../components/Container'
import { Typo } from "../components/Texts"
import { Hyper } from '../components/Links'

import { RiGithubFill as Github } from 'react-icons/ri'

const Home = () =>{
    return(
        <Container
            app
            stack
            background="whitesmoke"
            justify='center'
            align='center'
        >

            <Container 
                background='white'
                width='350px'
                height='150px'
                radius='.5em'
                hBoxShadow='0 0 20px rgba(0, 0, 0, .2)'
                padding='2em'
                stack
                justify='center'
                align='center'
            >
                <Typo color="blue">
                    Welcome to Frontend
                </Typo>

                <Container 
                    queue
                    justify='center'
                    align='center'
                >
                    <Github siz={18} />
                    <Hyper hDecoration='underline' color="black" hColor="blue" href='https://github.com/AutoSync/Frontend'>Github repo</Hyper>
                </Container>

            </Container>

        </Container>
    )
}
export default Home