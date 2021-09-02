import styled from 'styled-components'


export const Container = styled.div`
    display: ${props => props.display ? "centered" : "auto" || props.display || "auto"};

    width: ${props => props.width == "fill" ? "100%" : props.width || "auto"};
    min-width: ${props => props.minwidth || "auto"};
    height: ${props => props.height == "fill" ? "100%" : props.height || "auto"};
    min-height: ${props => props.minHeight || "auto"};

    background-color: ${props => props.background || "auto"};
    background-Image: ${props => props.backgroundImage };
    background-repeat: ${props => props.repeatImage || 'no-repeat, repeat'};
    background-position: ${props => props.positionImage || 'center'};
    background-size: ${props => props.sizeImage || 'cover'};

    border: ${props => props.border || 'auto'};
    border-bottom: ${props => props.bottomLined || 'auto'};
    border-top: ${props => props.topLined || 'auto'};
    border-right: ${props => props.rightLined || 'auto'};
    border-left: ${props => props.leftLined || 'auto'};

    color: ${props => props.color || "auto"};

    padding: ${props => props.padding || 'auto' };
    padding-top: ${props => props.ptop || 'auto'};
    padding-bottom: ${props => props.pbottom || 'auto'};
    padding-left: ${props => props.pleft || 'auto'};
    padding-right: ${props => props.pright || 'auto'};

    margin: ${props => props.margin || "10px 0 10px 0" };
    margin-top: ${props => props.mtop || 'auto'};
    margin-bottom: ${props => props.mbottom || 'auto'};
    margin-left: ${props => props.mleft || 'auto'};
    margin-right: ${props => props.mright || 'auto'};


    display: ${props => props.display || 'auto'};
    justify-content: ${props => props.verticalAlign || 'auto'};
    align-items: ${props => props.verticalAlign || 'auto'};

    :hover{
        cursor: ${props => props.isLink ? 'pointer' : 'auto'};
    }

`

export const Stack = styled(Container)`
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.invert ? 'row' : 'column'};

`
export const Faded = styled(Container)`
    background: ${props => props.fistBk || 'auto'};
    color: ${props => props.firstColor || 'auto'};
    transition-duration: ${props => props.time || '500ms'};

    :hover{
        background: ${props => props.secondBk || 'auto'};
        color: ${props => props.secondColor || 'auto'};
    }
`