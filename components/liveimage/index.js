import styled from "styled-components";


export const LiveImage = styled.img`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};

    background-image: url(${props => props.src});
    background-repeat: ${props => props.repeat || 'no-repaet'};
    background-size: ${props => props.size || 'cover'};
`