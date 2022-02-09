import styled from "styled-components";

export const Hyper = styled.a`
    display: ${props => props.stack || props.queue ? "flex" : props.display || "auto" };
    flex-direction: ${props => props.stack ? "column" : props.queue ? "row" : props.direction || "auto" };

    background-color: ${props => props.background };

    width: ${props => props.app ? "100%" : props.fill ? "100%" : props.width || "auto"};
    height: ${props => props.app ? "100vh" : props.full ? "100vh" : props.height || "auto"};

    color: ${props => props.color};
    padding: ${props => props.padding || '1em'};
    margin: ${props => props.margin || '0'};

    border: ${props => props.border || 'none'};
    border-radius: ${props => props.borderRadius || '0'};
    text-decoration: ${props => props.textDecoration || 'none'};

    text-decoration: none;
  
    justify-content: ${props => props.justify || "left"};
    align-items: ${props => props.align || "auto"};

    font-size: ${props => props.size || '16pt'};
    font-weight: ${props => props.bold ? "bold" : props.weight || 200 };

    backdrop-filter: ${props => props.backdrop || "blur(0px)"};

    cursor: pointer;
    transition-duration: ${props => props.transition || '300ms' };

    :hover{
        color: ${props => props.hoverColor || 'inherit'};
        background-color: ${props => props.hoverBackground };
        backdrop-filter: ${props => props.hoverBackdrop || "blur(0px)"};
    }
`