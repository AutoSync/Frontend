import { Container } from "./style"
import Link from 'next/link'


const Header = () =>{
    return <Container>
        <h1 className="logo">Series</h1>
        <h2>MyProject</h2>
        <Link href="/">Logout</Link>

    </Container>
}

export default Header