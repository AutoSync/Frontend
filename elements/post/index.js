
import { Container } from "../../components/layout";
import { LiveImage } from "../../components/liveimage";
import { Text } from "../../components/Text";
 

const Post = (props) => {

    const url = `https://source.unsplash.com/${props.banner}`

    return <Container width="25%" height="40%"
            radius="10px" borderTop="15px solid #EDEDED"
            shadow="0 2px 4px #D5D5D5"
            background="white"
            margin="10px" padding="10px" >
        <Container inRow
            radius="50px"
            justify="center" align="center"
            >

            <Text className="headerTitle" type="title">{props.title}</Text>
            <LiveImage src={url}
                    width="100%" height="50px"/>
            <Text size="16pt">{props.subtitle}</Text>

            <Container>
                <a href={props.hiper}>{props.hiperLabel}</a>
            </Container>

        </Container>
    </Container>
}

export default Post;