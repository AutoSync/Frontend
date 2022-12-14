import styled from "styled-components"


export const Container = styled.div`

    display: ${props => props.stack || props.queue ? "flex" :  props.display || "auto" };
    float: ${props => props.float || 'auto'};
    flex-direction: ${props => props.stack ? "column" : props.queue ? "row" : props.direction || "auto" };

    position: ${props => props.position || "auto"};
    
    width: ${props => props.app ? "100%" : props.fill ? "100%" :  props.separator ? "2px" :  props.width || "auto"};
    height: ${props => props.app ? "100vh" : props.full ? "100vh" : props.separator ? "80%" :  props.height || "auto"};

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

    opacity: ${props => props.opacity || "1.0"};

    background: linear-gradient( ${props => props.linearAngle || 0}, ${props => props.linearStart || "auto"}, ${props => props.linearEnd || "auto"} );

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

    top: ${props => props.top || "auto"} ;
    left: ${props => props.left || "auto"} ;
    right: ${props => props.right || "auto"} ;
    bottom: ${props => props.bottom || "auto"} ;

    backdrop-filter: ${props => props.backdrop || "none"};
    box-shadow: ${props => props.boxShadow};

    scroll-snap-type: ${props => props.scrollSnap || "none"}; 

    justify-content: ${props => props.justify || "left"};
    align-items: ${props => props.align || "auto"};

    transition-duration: ${props => props.animDuration || "400ms"};

    transform: ${props => props.transfrom || 'auto' };
    font-size: ${props => props.size || "auto"};
    font-weight: ${props => props.weight || "auto"};

    resize: ${props => props.resize || "none"};
    overflow: ${props => props.overflow ||  "none" };

    z-index: ${props => props.zOrder || "or" };

    cursor: ${props => props.cursor || "default"};

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

    @media only screen and (max-width: ${props => props.mobile || "512px"}) { 

        flex-direction: ${props => props.mDirection || "auto" };
        justify-content: ${props => props.mJustify || "left"};
        align-items: ${props => props.mAlign || "auto"};
        
        width: ${props => props.app ? "100%" : props.fill ? "100%" : props.mWidth || "auto"};
        height: ${props => props.app ? "100vh" : props.full ? "100vh" : props.mHeight || "auto"};

        width: ${props => props.mWidth };
        height: ${props => props.mHeight};
        min-width: ${props => props.mMinWidth};
        min-height: ${props => props.mMinHeight};
        max-width: ${props => props.mMaxWidth};
        max-height: ${props => props.mMaxHeight};

        margin: ${props => props.mMargin || 0 };
        margin-left: ${props => props.mMarginLeft || 0};
        margin-right: ${props => props.mMarginRight || 0};
        margin-top: ${props => props.mMarginTop || 0};
        margin-bottom: ${props => props.mMarginBottom || 0};

        padding: ${props => props.mPadding || 0 };
        padding-left: ${props => props.mPaddingleft || 0};
        padding-right: ${props => props.mPaddingright || 0};
        padding-top: ${props => props.mPaddingtop || 0};
        padding-bottom: ${props => props.mPaddingbottom || 0};

        transition-duration: ${props => props.animDuration || "400ms"};

        //transform: ${props => props.mTransfrom};
        font-size: ${props => props.mSize || "auto"};
        font-weight: ${props => props.mWeight || "auto"};

        resize: ${props => props.mResize || "none"};
        overflow: "auto";

        :hover{
            width: ${props => props.mHoverWidth};
            height: ${props => props.mHoverHeight};

            border: ${props => props.mHoverBorder || "auto"};
            border-top: ${props => props.mHoverBorderTop || "auto"};
            border-left: ${props => props.mHoverBorderLeft || "auto"};
            border-right: ${props => props.mHoverBorderRight || "auto"};
            border-bottom: ${props => props.mHoverhBorderBottom || "auto"};
        }}
`

export const Wrap = styled(Container)`
    display: flex;
    flex-wrap: wrap;


`