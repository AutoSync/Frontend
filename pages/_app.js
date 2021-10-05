import GlobalStyle from '../styles/GlobalStyle'


const App = ({Component, pageprops}) =>{
    return <>
    <GlobalStyle />
    <Component {...pageprops} />
    </>

}

export default App;