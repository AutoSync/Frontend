import styled from 'styled-components'


export const Container = styled.div`

    display: ${props => props.type == 'stack' || 'wrap' ? 'flex' 
            : props.type == 'grid' ? 'grid' 
            : props.display || 'block'};

    position: ${props => props.position || 'relative'};
    
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding || 0};

    flex-wrap: ${props => props.type == 'wrap' ? 'wrap' : props.wrap || 'wrap'};
    flex-direction: ${props => props.type == 'stack' ? 'row' : props.inRow ? "column" : props.direction || 'auto' };

    width: ${props => props.fill ? "100%" : props.fillWidth ? '100%' : props.width || 'auto' };
    height: ${props => props.fill ? "100vh" : props.fillHeight ? "100vh" : props.height || 'auto' };

    color: ${props => props.color || 'auto'};
    background-color: ${props => props.background || 'auto'};

    border: ${props => props.border || 'auto'};
    border-top: ${props => props.borderTop || 'auto'};
    border-left: ${props => props.borderLeft || 'auto'};
    border-right: ${props => props.borderRight || 'auto'};
    border-bottom: ${props => props.borderBottom || 'auto'};

    border-radius: ${props => props.radius || 'auto'};

    box-shadow: ${props => props.shadow || 'auto'};

    justify-content: ${props => props.justify || 'auto'};
    align-items: ${props => props.align || 'auto'};


`

