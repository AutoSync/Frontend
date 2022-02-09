import { Container } from "../Container"
import Tab from "../tab/index"

import  SeriesLogo  from "../../public/seriesblacklogo.svg"

import { BiHomeAlt as Home, BiBookAlt as Project } from 'react-icons/bi'
import {RiTeamLine as Team, RiSettings5Line as Sets, RiBarChartGroupedLine as Chart} from 'react-icons/ri'

export default function Toobar(props) {
    
    return <Container 
    stack
    width={props.width}
    background="whitesmoke"
    color="#637880"
    align="left"
    >
        <Container 
        stack
        padding="1em"
        height="50px"
        justify="center"
        align="center"
         >
             <SeriesLogo width="100px"/>
        </Container>
        <Container height="1px" background="#C9C9C9" />
        <Tab link="/app/dashboard" tag={props.tag} title="Inicio"> <Home /> </Tab>
        <Tab link="/app/projects"  tag={props.tag} title="Projetos"> <Project /> </Tab>
        <Tab link="/app/team"  tag={props.tag} title="Equipe"> <Team /> </Tab>
        <Tab link="/app/chats"  tag={props.tag} title="Projeções"> <Chart />  </Tab>
        <Tab link="/app/settings"  tag={props.tag} title="Ajustes"> <Sets /> </Tab>

    </Container>
}