import styled from "styled-components";

export const Text = styled.p`
    font-size: ${props => props.type == 'title' ? '22pt' 
                : props.type == 'subtitle' ? '18pt' : props.size};
    font-weight: ${props => props.weight || 200 };

`