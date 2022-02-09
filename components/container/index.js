import styled from "styled-components"


export const Container = styled.div`

    display: ${props => props.stack || props.queue ? "flex" : props.display || "auto" };
    flex-direction: ${props => props.stack ? "column" : props.queue ? "row" : props.direction || "auto" };

    position: ${props => props.position || "auto"};
    
    width: ${props => props.app ? "100%" : props.fill ? "100%" : props.width || "auto"};
    height: ${props => props.app ? "100vh" : props.full ? "100vh" : props.height || "auto"};

    width: ${props => props.width };
    height: ${props => props.height};
    min-width: ${props => props.minWidth};
    min-height: ${props => props.minHeight};
    max-width: ${props => props.maxWidth};
    max-height: ${props => props.maxHeight};

    margin: ${props => props.margin || 0 };
    padding: ${props => props.padding || 0 };

    background-color: ${props => props.background || "auto"};
    background: ${props => props.back || "auto"};
    background-image: ${ props => props.image ? `url(${props.image})` : "none" };
    background-repeat: ${props => props.repeat || "no-repeat"};
    background-size: ${props => props.size || "cover"};
    background-position: ${props => props.position || "center"};

    opacity: ${props => props.opacity || 1};
    z-index: ${props => props.zIndex || 0};

    color: ${props => props.color || "auto"};

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
    
    backdrop-filter: ${props => props.backdrop || "none"};
    box-shadow: ${props => props.boxShadow};

    scroll-snap-type: ${props => props.scrollSnap || "none"}; 

    justify-content: ${props => props.justify || "left"};
    align-items: ${props => props.align || "auto"};

    transition-duration: ${props => props.animDuration || "400ms"};

    transform: ${props => props.transfrom || "scale(1)"};
    font-size: ${props => props.size || "auto"};
    font-weight: ${props => props.weight || "auto"};

    :hover{
        box-shadow: ${props => props.hoverBoxShadow};

        background: ${props => props.hoverBackground || "auto"};
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
