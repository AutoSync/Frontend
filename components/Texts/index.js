import styled from "styled-components";

export const Typo = styled.h1`

    width: ${props => props.app ? "100%" : props.fill ? "100%" : props.width || "auto"};
    height: ${props => props.app ? "100vh" : props.full ? "100vh" : props.height || "auto"};
    
    min-width: ${props => props.mimWidth || "auto" };
    min-height: ${props => props.minHeight || "auto" };
   
    margin: ${props => props.margin || 0 };
    padding: ${props => props.padding || 0 };

    font-size: ${props => props.size || "14pt"};
    font-weight: ${props => props.bold ? "bold" : props.weight || 300 };
    font-family: ${props => props.family || "Roboto"};

    word-wrap: ${props => props.wrap ? "break-word" : props.wrap || "auto"};

    color: ${props => props.color};

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

    background-color: ${props => props.background };
    padding: ${props => props.padding || 0 };
    margin: ${props => props.margin || 0 };

    text-align: ${props => props.textAlign || "inherit"};
    text-shadow: ${props => props.textShadow};
    transition-duration: ${props => props.animDuration || "200ms"};

    :hover{
            backdrop-filter: ${props => props.hBackdrop || "blur(0px)"};

            text-shadow: ${props => props.hTextShadow};

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

    @media only screen and (max-width: 600px) { 

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
            backdrop-filter: ${props => props.mHBackdrop || "blur(0px)"};

            box-shadow: ${props => props.mHBoxShadow};

            background: ${props => props.mHBackground || "auto"};
            color: ${props => props.mHcolor || "auto" };

            width: ${props => props.mHWidth};
            height: ${props => props.mHHeight};

            border: ${props => props.mHBorder || "auto"};
            border-top: ${props => props.mHBorderTop || "auto"};
            border-left: ${props => props.mHBorderLeft || "auto"};
            border-right: ${props => props.mHBorderRight || "auto"};
            border-bottom: ${props => props.mHBorderBottom || "auto"};
        }
        
    }

    `

    export const Txt = styled(Typo)`
    
    `