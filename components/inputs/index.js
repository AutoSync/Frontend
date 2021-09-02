import styled from 'styled-components'

export const Buttons = styled.button`

    display: ${props => props.display ? "centered" : "auto" || props.display || "auto"};

    width: ${props => props.width ? "fill": "100%" || props.width || "auto"};
    height: ${props => props.height ? "fill": "100%" || props.height  || 'auto'};

    background: ${props => props.outline ? 'none' : props.back|| props.back|| "auto"};
    background-color: ${props => props.outline ? 'none' : props.background || props.background || "auto"};
    color: ${props => props.color || "auto"};

    border: ${props => props.outline ? props.border : props.border || 'auto'};
    border-radius: ${props => props.radius || 'auto'};

    padding: ${props => props.padding || '10px' };
    padding-top: ${props => props.ptop || 'auto'};
    padding-bottom: ${props => props.pbottom || 'auto'};
    padding-left: ${props => props.pleft || 'auto'};
    padding-right: ${props => props.pright || 'auto'};

    margin: ${props => props.margin || "auto" };
    margin-top: ${props => props.mtop || 'auto'};
    margin-bottom: ${props => props.mbottom || 'auto'};
    margin-left: ${props => props.mleft || 'auto'};
    margin-right: ${props => props.mright || 'auto'};
    
    :hover{
        cursor: ${props => props.isLink ? 'pointer' : 'auto'};
    }
`
export const SolidButton = styled(Buttons)`

    border-radius: ${props => props.radius || '5px'};
    border: ${props => props.outline ? props.border : props.border || 'none'};
    padding: ${props => props.padding || '5px' };
`
export const FadedButton = styled(SolidButton)`
    background: transparent;
    transition-duration: ${props => props.time || '500ms'};
    :hover{
        background: ${props => props.background || 'auto'};
    }
`
export const RoundButton = styled(SolidButton)`
    border-radius: ${props => props.radius || 'auto'};
`
export const LinkButton = styled(SolidButton)`
    :hover{
        cursor: pointer;
    }
`

