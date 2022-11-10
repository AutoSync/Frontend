import { useState } from "react"
import styled from "styled-components"
import { Container } from "../container"
import { Typo } from "../typo"

const Label = styled.label``


const BoolProps = (props) =>{

    const size = "10pt"
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(!checked)
        props.data(checked)
    }

    return(
        <Container
            padding={"1em"}
        >
                <Typo 
                    size={size}

                >
                    Default Value
                </Typo>
                <Container
                queue={true}
                >
                    <input type={"checkbox"} checked={checked} onChange={handleChange} />
                    
                    <Typo 
                        size={size}
                        margin={"0px 5px"}
                    >
                        { checked.toString() }
                    </Typo>
                </Container>


        </Container>
    )
}

export default BoolProps