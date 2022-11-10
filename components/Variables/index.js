import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Typo } from "../Texts";
import { Coloris } from "../../engine/Global";
    
import {BiCube as SingleIcon } from "react-icons/bi"
import { border_dark } from "../../styles/GlobalColors";
import { Container } from "../container";

const Select = styled.select`
    margin: 0 5px;

`
const Option = styled.option`

`

const SelectButton = styled.button`
    background: none;
    border: none;
    width: 100%;
    height: 100%;
`

const Variables = (props) =>{
    const [selection, setSelection] = useState({isSelected: false, type: "variable", identifier: "none"})
    const [value, setValue] = useState(props.value)
    const [type, setType] = useState(props.type)
    const [background, setBackground] = useState("maroon")
    const [background_icon, setBackgroundIcon] = useState("red")
    const [background_dark, setBackgroundDark] = useState("gray")
    const [color, setColor] = useState("#8C0000")
    const [selected, setSelected] = useState(false)
  
    const handleChange = (e) => {
        setType(e.target.value)
        colorizeVariables()
    }
    const handleSelected = () =>{
        setSelected(!selected)
        colorizeVariables(type)
        setSelection({isSelected: selected, type: "variable", identifier: type})
        props.Selection(selection)
    }
    function colorizeVariables(){
        const colorSet = Coloris(type)
        setBackground(colorSet.background)
        setBackgroundIcon(colorSet.icon)
        setColor(colorSet.color)
        setBackgroundDark(colorSet.background_dark)
    }
    
    useEffect(() =>{
        colorizeVariables()
    })
    
    return(
        <Container 
            border={border_dark}
            borderColor={selected ? background : "#3B3B3B" }
            background={selected ? background_dark : "none" }
            draggable={true}
            >

            <SelectButton
                selected={selected}
                onClick={() => handleSelected()}
            >
                <Container
                        queue={true}
                        justify={"space-between"}
                        align={"center"}
                        
                    >
                    <Container
                        queue={true}
                        justify={"space-between"}
                        align={"center"}
                        >
                        <SingleIcon color={background_icon} size={12} />
                    </Container>

                    <Typo
                        color={selected ? color :"#858585"}
                        size={"10pt"}
                        margin={"2px 10px"}
                    >
                        {props.name}
                    </Typo>

                    {/* <Select onChange={handleChange}>
                        <Option  selected={type == "boolean" ? "selected" : ""} value={"boolean"}>boolean</Option>
                        <Option  selected={type == "number" ? "selected" : ""} value={"number"}>number</Option>
                        <Option  selected={type == "string" ? "selected" : ""} value={"string"}>string</Option>
                    </Select> */}
    
                    {props.Action}

                </Container>
    
            </SelectButton>
        </Container>
    )
}

export default Variables