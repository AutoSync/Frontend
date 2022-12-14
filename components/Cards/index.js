import { useEffect, useState } from "react";
import { Container } from "../container"
import { Hyper } from "../Links";


import {MdAdd as CreateIcon } from "react-icons/md"
import {FaPython as PythonIcon} from "react-icons/fa"
import {SiCplusplus as CppIcon} from "react-icons/si"

import { BsLayersFill as MoxomaIcon } from "react-icons/bs"

import { Typo } from "../Texts";



export const Card = ( { Project, Title, Target } ) =>{
    
    let defaultTemplate = { border: "none", background: "whitesmoke" }

    const [template, setTemplate] = useState(defaultTemplate)
    const [title, setTitle] = useState("Title")
    const [target, setTarget] = useState("Legend")
    const [Icon, setIcon] = useState(<></>)

    const updateCard = () => {

        let tempTitle = "title"
        let legend = "legend"

        switch(Project){

            case "new-project":
                defaultTemplate.border = "2px dotted blue"
                defaultTemplate.background = "none"
                tempTitle = "Create new Project"
                legend = "Start new project empty"
                break;
            case "python-machine":
                defaultTemplate.border = "none"
                defaultTemplate.background = "#D2EAFF"
                tempTitle = Title
                legend = Target
                break;
            case "cpp-machine":
                defaultTemplate.border = "none"
                defaultTemplate.background = "#FCD2FF"
                tempTitle = Title
                legend = Target
                break;
            case "moxoma":
                defaultTemplate.border = "none"
                defaultTemplate.background = "#E4E3E5"
                tempTitle = Title
                legend = Target
                break;
        }
        setTitle(tempTitle)
        setTarget(legend)
        setTemplate(defaultTemplate)
    }

    const updateIcon = () => {
        
        let frag = <></>
        const sizeIcon = 24
        switch(Project){
            case "new-project":
                frag = <CreateIcon size={sizeIcon} />
                break;
            case "cpp-machine":
                frag = <CppIcon size={sizeIcon} />
                break;
            case "python-machine":
                frag = <PythonIcon size={sizeIcon} />
                break;
            case "moxoma":
                frag = <MoxomaIcon size={sizeIcon} />
                break;
            default:
                frag = <></>
                break;
        }
        setIcon(frag)
    }

    useEffect(() => {
        updateCard()
        updateIcon()
    }, [])
    
    return (
        <Hyper 
            stack
            width="170px"
            height="250px"
            margin="1em"
            padding="40px 20px"
            radius="5px"
            href="/editor"
            justify="space-between"
            background={template.background}
            border={template.border}

        >
            { Icon }
            <Typo 
            size="16pt" weight={500} 
            margin="10px 0px 0px 0px"
            >{title}</Typo>
            <Typo size="12pt" weight={300} color="#808080" >{target}</Typo>
            
        </Hyper>
    )
}