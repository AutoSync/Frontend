import styled from "styled-components";
import { white_60 } from "../../styles/GlobalColors";

export const Button = styled.button`
    min-width: 25px;
    min-height: 25px;
    background: ${props => props.background ? props.background || "auto" : white_60 };
   
    border-radius: 5px;
    border: ${props => props.border || "auto"};
    border-top: ${props => props.borderTop || "auto"};
    border-left: ${props => props.borderLeft || "auto"};
    border-right: ${props => props.borderRight || "auto"};
    border-bottom: ${props => props.borderBottom || "auto"};
    border-radius: ${props => props.radius || "auto"};
    border-image: ${props => props.borderImage || "auto"};
    border-width: ${props => props.borderWidth || "auto"};
    border-style: ${props => props.borderStyle || "auto"};
    border-color: ${props => props.borderColor || "auto"};

    color: ${props => props.color || "black" };

    padding: ${props => props.padding || "5px 7px" };
    margin: ${props => props.margin || "5px 0px 0px 5px" };

    cursor: ${props => props.cursor || "default"};

    transition-duration: ${props => props.animDuration || "400ms"};

    :hover{
        box-shadow: ${props => props.hBoxShadow};

        background: ${props => props.hBackground || "auto"};
        color: ${props => props.hcolor || "auto" };

        width: ${props => props.hWidth};
        height: ${props => props.hHeight};

        border: ${props => props.hBorder || "auto"};
        border-top: ${props => props.hBorderTop || "auto"};
        border-left: ${props => props.hBorderLeft || "auto"};
        border-right: ${props => props.hBorderRight || "auto"};
        border-bottom: ${props => props.hBorderBottom || "auto"};
    }

`

export const ToolbarButton = styled(Button)`
    min-width: 20px;
    min-height: 20px;

`

export const DeleteVariableButton = styled(Button)`
    width: 20px;
    height: 20px;
    min-width: 15px;
    min-height: 15px;
    background: none;
    border: none;
    color: white;
`

export const CollapseButton = styled(Button)`
    min-width: 15px;
    min-height: 15px;
    background: none;
    color: white;
`

export const AddVariable = styled(Button)`
    min-width: 20px;
    min-height: 20px;
    background: none;
    color: white;

    padding: "10px 5px";
    margin: "5px 5px";
`
export const TabButton = styled(Button)`
    border-radius: 0px;
    margin: 0;
    height: 100%;

`
export const TabDelete = styled(Button)`

`
