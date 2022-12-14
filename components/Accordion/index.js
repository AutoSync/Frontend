import { Container } from "../container"
import { Typo } from "../Texts"

import { useEffect, useState } from "react"
import styled from "styled-components"

import {MdKeyboardArrowRight as OpenMenu, MdKeyboardArrowDown as CloseMenu } from "react-icons/md"
import { CollapseButton } from "../Buttons"

const Accordion = (props) => {

    const [icon, setIcon] = useState(<CloseMenu />)
    const [hideState, setHideState] = useState(props.hidded)
    const [hide, setHide] = useState("block");
    const [menuState, setMenuState] = useState(props.show)
    const [collapsed, setCollapsed] = useState("block")
    const iconSize = 14
    
    const CollapseMenu = () => {
        setMenuState(!menuState)
        setIcon(menuState ? <CloseMenu size={iconSize} /> : <OpenMenu size={iconSize} />)
        setCollapsed(menuState ? "block" : "none")
    }

    useEffect(() => {
        setCollapsed(menuState ? "block" : "none")
        setIcon(menuState ? <CloseMenu size={iconSize} /> : <OpenMenu size={iconSize} />)
        setHideState(props.hidded)
        if(hideState)
            setHide("none")
        else
            setHide("block")
    },[])


    return (
        <Container display={hide}
            stack={true}
            border={"1px solid #3B3B3B"}
        >
            <Container 
                queue={true}
                justify={"space-between"}
                align={"center"}
                padding={"2px"}
            >
                <CollapseButton onClick={() => CollapseMenu()}>{icon}</CollapseButton>
                <Typo
                    width={"100%"}
                    margin={"0 10px"}
                >
                    {props.title || "Title"}
                </Typo>

                {props.Action}

            </Container>
            <Container display={collapsed}>
                {props.children}
            </Container>


        </Container>
    )
}

export default Accordion