import { Children, useEffect, useState } from "react"
import { Button, TabButton } from "../Buttons"
import { Container } from "../container"
import { Typo } from "../Texts"
import { NodeId } from "../NucleoEditor"


const TabMenu = ( props ) => {
    const barHeight = 5
    const [ tabBarHeight, setTabBarHeight ] = useState("10vh")
    const [ tabContentHeight , setTabContentHeight ] = useState("95vh")
    const [ visibleIndex, setVisibleIndex ] = useState(1)
    const [content, setContent ] = useState(props.data)

    const ChangeIndex = (index) => {
        setVisibleIndex(index)
        setContent(props.data)
    }

    const ContructTabMenu = () => {

        let tabcontent_height = 100 - barHeight
        setTabBarHeight(barHeight.toString() + "vh")
        setTabContentHeight(tabcontent_height.toString() + "vh")
        setVisibleIndex(visibleIndex)
        setContent(props.data)
        
    }
     
    useEffect(() => ContructTabMenu(), [])

    return (
        <Container
            app
        >
            <Container
                height={tabBarHeight}
                background="whitesmoke"
            >
                {
                    content.map( (item, index) => 
                                <TabButton key={NodeId(4)}
                                    onClick={ () => ChangeIndex(index) }
                                    background={visibleIndex == index? "#3C2E4F" : "whitesmoke" }
                                    border={"1px solid " + (visibleIndex == index? item.color : "whitesmoke" ) }
                                > 
                                    <Typo
                                        color={visibleIndex == index? item.color : "#D7D7D7" }
                                        size="12pt"
                                    >
                                        {item.title}
                                    </Typo>
                                </TabButton> )
                }

                            
            </Container>

            <Container>
                {
                    content.map((elements, index) => <Container key={NodeId(4)}
                            width="100%"
                            height={tabContentHeight}
                            display={visibleIndex == index ? "block" : "none" }
                        >
                            { elements.content }
                        </Container>
                    )
                }
            </Container>

        </Container>
    )
}

export default TabMenu