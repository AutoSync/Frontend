import { Container } from "../../components/layout";
import { Text } from '../../components/Text';
import { MainColor } from '../../styles/collors';

import Logo from '../../public/serieslogo.svg'

import Link from 'next/link'
import Image from 'next/image'

const Header = () =>{
    return <Container stack
                fillWidth height="70px"
                background={MainColor}
                justify="space-between" aling="center" > 

            <Container background="red"
                width="15%"
                justify="space-between" 
                align="center" 
                padding="10px" >
                <Image src={Logo} alt=""
                        width={40} height={40} />
                 <Text type="title" >Series</Text>
            </Container>
            <Container background="yellow" >
                <Text>Commands</Text>
            </Container>
            <Container background="blue">
                <Text>User data-Set</Text>
            </Container>
            
    </Container>
}

export default Header;