import styled from "styled-components";
import { white } from "../../styles/GlobalColors";

export const Hyper = styled.a`
    display: ${props => props.stack || props.queue ? "flex" : props.display || "auto" };
    flex-direction: ${props => props.stack ? "column" : props.queue ? "row" : props.direction || "auto" };

    background-color: ${props => props.background };
    position: ${props => props.position || "auto"};

    width: ${props => props.app ? "100%" : props.fill ? "100%" : props.width || "auto"};
    height: ${props => props.app ? "100vh" : props.full ? "100vh" : props.height || "auto"};

    color: ${props => props.color ? white : props.color || "auto"};
    padding: ${props => props.padding || '1em'};
    margin: ${props => props.margin || '0'};

    border: ${props => props.border || 'none'};
    border-radius: ${props => props.radius || '0'};
    text-decoration: ${props => props.decoration || 'none'};

    top: ${props => props.top || "auto"} ;
    left: ${props => props.left || "auto"} ;
    right: ${props => props.right || "auto"} ;
    bottom: ${props => props.bottom || "auto"} ;
 
    justify-content: ${props => props.justify || "left"};
    align-items: ${props => props.align || "auto"};

    font-size: ${props => props.size || '12pt'};
    font-weight: ${props => props.bold ? "bold" : props.weight || 400 };

    backdrop-filter: ${props => props.backdrop || "blur(0px)"};

    cursor: pointer;
    transition-duration: ${props => props.transition || '300ms' };

    :hover{
        backdrop-filter: ${props => props.hBackdrop || "blur(0px)"};

        box-shadow: ${props => props.hBoxShadow};

        background: ${props => props.hBackground || "auto"};
        color: ${props => props.hColor || "auto" };
        text-decoration: ${props => props.hDecoration || 'none'};

        width: ${props => props.hWidth};
        height: ${props => props.hHeight};

        border: ${props => props.hBorder || "auto"};
        border-top: ${props => props.hBorderTop || "auto"};
        border-left: ${props => props.hBorderLeft || "auto"};
        border-right: ${props => props.hBorderRight || "auto"};
        border-bottom: ${props => props.hBorderBottom || "auto"};
    }
    :visited{
        color: ${props => props.visited ? props.visited : props.color || 'inherit' };
    }

    @media only screen and (max-width: ${props => props.mobile || "512px"}) {

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

        font-size: ${props => props.mSize || "14pt"};
        font-weight: ${props => props.mBold ? "bold" : props.mWeight || 300 };
        font-family: ${props => props.mFamily || "Roboto"};

        :hover{
        backdrop-filter: ${props => props.mHoverBackdrop || "blur(0px)"};

        box-shadow: ${props => props.mHoverBoxShadow};

        background: ${props => props.mHoverBackground || "auto"};
        color: ${props => props.mHovercolor || "auto" };

        width: ${props => props.mHoverWidth};
        height: ${props => props.mHoverHeight};

        border: ${props => props.mHoverBorder || "auto"};
        border-top: ${props => props.mHoverBorderTop || "auto"};
        border-left: ${props => props.mHoverBorderLeft || "auto"};
        border-right: ${props => props.mHoverBorderRight || "auto"};
        border-bottom: ${props => props.mHoverhBorderBottom || "auto"};
        }
        
    }
`