import { useState } from "react"
import { Container } from "../container"
import { Input } from "../Input"
import { Typo } from "../typo"



const NumberProps = (props) =>{

    const size = "10pt"
    const [number, setNumber] = useState(0.0)

    const handleChange = (e) => {
        setNumber(e.target.value)
        props.data(number)
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
                    <Input type={"number"} value={number} onChange={handleChange} />
                    
                </Container>


        </Container>
    )
}

export default NumberProps