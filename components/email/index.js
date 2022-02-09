import styled from "styled-components";
import { Container } from "../Container";


const MailSender = styled.input`

    display: block;
    width: 100%;
    padding: 1em;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 1em;
    font-weight: bold;
    color: #333;
    background-color: #fff;
    

`
const ButtonSender = styled.button`
    background-color: #00bcd4;
    color: white;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
`


export default function Email(){

    return <Container 
    queue
    >
        <MailSender type="email" placeholder="Email" />
        <ButtonSender>Enviar</ButtonSender>
    </Container> 
}