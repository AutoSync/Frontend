import { Container } from "../../components/layout";
import Post from "../post";




const posts = [ { 
                banner: 'YLyxXawZm4w',
                title: 'Manejo',
                subtitle: 'Como é feito o manejo de aves poedeiras',
                link: '/',
                linkLabel: 'Link for article 1' },
                {
                banner: 'YK3pooT7MQg',
                title: 'Cria e Recria',
                subtitle: 'Subtitulo 2',
                link: '/',
                linkLabel: 'Link for article 2' },
                {
                banner: 'YK3pooT7MQg',
                title: 'Recepção e Alojamento',
                subtitle: 'Subtitulo 3',
                Link: '/',
                linkLabel: 'Link for article 3' },
                ]

const Board = () =>{
    return <Container fill
            padding="20px"
            >

        {
        posts.map( ({banner, title, subtitle, link, linkLabel} )=> <Post banner={banner} title={title} 
                        subtitle={subtitle} hiper={link}
                        hiperLabel={linkLabel}/>
        )
    }

    </Container>
}

export default Board;