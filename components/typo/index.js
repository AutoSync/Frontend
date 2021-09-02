import styled from 'styled-components'

function family(font, style){
    return font + ',' + style;
}

export const Typo = styled.h1`
    background-color: ${props => props.background || "auto"};
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

    font-size: ${props => props.size || "auto"};
    font-weight: ${props => props.weight || 'auto'};
    font-family: ${props => props.family || 'Roboto'};

`
export const Title = styled(Typo)`
    font-size: ${props => props.size || "14pt"};
`
export const Subtitle = styled(Typo)`
    font-size: ${props => props.size || "12pt"};
`
export const Text = styled(Typo)`
    font-size: ${props => props.size || "10pt"};
`
