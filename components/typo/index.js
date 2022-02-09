import styled from "styled-components";

export const Typo = styled.h1`

    font-size: ${props => props.size || "16pt"};
    font-weight: ${props => props.bold ? "bold" : props.weight || 200 };
    font-family: ${props => props.family || "Roboto"};

    color: ${props => props.color};

    background-color: ${props => props.background };
    padding: ${props => props.padding || 0 };
    margin: ${props => props.margin || 0 };

    text-align: ${props => props.align || "inherit"};

    `