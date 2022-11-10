import styled from "styled-components";
import { white_60 } from "../../styles/GlobalColors";

export const ToolbarButton = styled.button`
    min-width: 25px;
    min-height: 25px;
    background: ${props => props.background ? props.background || "auto" : white_60 };
   
    border-radius: 5px;
    border: none;
    color: black;

    padding: ${props => props.padding || "5px 7px" };
    margin: ${props => props.margin || "5px 0px 0px 5px" };

`

export const DeleteVariableButton = styled(ToolbarButton)`
    width: 20px;
    height: 20px;
    min-width: 15px;
    min-height: 15px;
    background: none;
    border: none;
    color: white;
`

export const CollapseButton = styled(ToolbarButton)`
    min-width: 15px;
    min-height: 15px;
    background: none;
    color: white;
`

export const AddVariable = styled(ToolbarButton)`
    min-width: 20px;
    min-height: 20px;
    background: none;
    color: white;

    padding: "10px 5px";
    margin: "5px 5px";
`
