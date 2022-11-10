import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { black, black_40, black_60, blue_20, blue_50, blue_80, blur_15, border_dark, gray, white } from "../../styles/GlobalColors";
import Accordion from "../Accordion";
import { Container } from "../container";
import { Typo } from "../Texts";
import Variables from "../Variables";

import {AiFillPlusCircle as AddIcon } from "react-icons/ai"
import {MdRemoveCircle as RemoveIcon} from "react-icons/md"
import {TiDeleteOutline as DeleteIcon, TiExport as ExportIcon} from "react-icons/ti"
import {BsCodeSquare as NewFileIcon, BsSave as SaveFileIcon, BsGrid as CompileIcon, BsPlay as RunIcon  } from "react-icons/bs"

import ReactFlow, {Background, MiniMap, Controls, applyNodeChanges, applyEdgeChanges, addEdge} from "reactflow";
import 'reactflow/dist/style.css';
import { AddVariable, DeleteVariableButton, ToolbarButton } from "../Buttons";
import { center, start } from "../../engine/Global";

import NucleoWhiteLogo from "../../styles/Icons/nucleo_white_logo.svg"
import { Hyper } from "../Links";

import TextUpdaterNode from "../../engine/StandardNodes/TextUpdaterNode";
import BeginProgramNode from "../../engine/StandardNodes/BeginProgramNode";
import FlowForNode from "../../engine/StandardNodes/FlowForNode";
import FlowBranchNode from "../../engine/StandardNodes/FlowBranchNode";


const nodeTypes = { textUpdater: TextUpdaterNode, eventBegin: BeginProgramNode, flowFor: FlowForNode, flowBranch: FlowBranchNode };

const CodeEdit = (props) => {
    
    const var_init = [] 
    const [nodes, setNodes] = useState(props.data.nodes)
    const [edges, setEdges] = useState(props.data.edges)
    const onNodesChanges  = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [])
    const onEdgesChanges = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), [])
    const onConnect = useCallback((connections) => setEdges((eds) => addEdge(connections, eds)), [])
    const [variables, setVariables] = useState(var_init)
    const [selection, setSelection] = useState({isSelected: false, type: "variable", identifier: "boolean" })

    function CreateVariable(){
        const newvar = {name: "new_boolan", type: "boolean", value: "true", identifier: "variable", isSelected: false }
        let newList = []
        variables.forEach((variable) => {newList.push(variable)} )
        newList.push(newvar)
        setVariables(newList)
    }

    function AddVar(){
        return <AddVariable onClick={() => CreateVariable()}>
            <AddIcon />
        </AddVariable>
    }

    function DeleteVariable(i){ 
        let newList = [];
        variables.forEach((variable, index) => {if(index != i){newList.push(variable)}} )
        setVariables(newList)    
    }

    const makeSelection = (selection) => {
        if(selection.isSelected)
        {
            setSelection({isSelected: selection.isSelected, type: selection.type, identifier: selection.identifier})
        }
        else
        {
            setSelection({isSelected: false, type: selection.type, identifier: selection.identifier})
        }
    }
    
    useEffect(() => {
        setVariables(props.data.variables)
    }, [])

    return (
        
        <Container 
            app
            stack
            linearAngle="137deg"
            linearStart="#464646"
            linearEnd={black}
            color={white}
        >
            <Container
                fill
                queue
                height="50px"
                backdrop={blur_15}
                background={black_60}
            >
                <Container 
                    queue
                    justify={start}
                    align={center}
                    >
                    
                    <Hyper href="/">
                        <NucleoWhiteLogo width="40px" height="40px"/>
                    </Hyper>

                    <ToolbarButton >
                        <Container stack justify={center} align={center}>
                            <NewFileIcon size={14} />
                            <Typo size="8pt">New File</Typo>
                        </Container>
                    </ToolbarButton>

                    <ToolbarButton>
                        <Container stack justify={center} align={center}>
                            <SaveFileIcon size={14} />
                            <Typo size="8pt">Save File</Typo>
                        </Container>
                    </ToolbarButton>

                    <ToolbarButton>
                        <Container stack justify={center} align={center}>
                            <CompileIcon size={14} />
                            <Typo size="8pt">Compile</Typo>
                        </Container>
                    </ToolbarButton>

                    <Container 
                        separator
                        background={gray}
                    />

                    <ToolbarButton background={blue_80}>
                        <Container stack justify={center} align={center}>
                            <RunIcon size={14} />
                            <Typo size="8pt">Run</Typo>
                        </Container>
                    </ToolbarButton>

                    <ToolbarButton>
                        <Container stack justify={center} align={center}>
                            <ExportIcon size={14} />
                            <Typo size="8pt">Export</Typo>
                        </Container>
                    </ToolbarButton>

                </Container>

            </Container>

            <Container
                fill
                queue
                height="90vh"
            >
                
                <Container
                    width="200px"
                    height="100%"
                    borderRight={border_dark}
                >
                   <Accordion title="Graph" />
                   <Accordion title="Functions" />
                   <Accordion title="Variables" show={true} Action={AddVar()}  >
                        {
                            variables.map((vao, index) => <Variables key={vao.id} name={vao.name} type={vao.type} Selection={makeSelection}  Action={<DeleteVariableButton onClick={() => DeleteVariable(index)}><DeleteIcon /></DeleteVariableButton>} />)
                        }
                   <Accordion title="Local Variables" hidded={false}/>
                   </Accordion>
                   <Accordion title="Events" />
                   <Accordion title="Interfaces" />

                </Container>

                <Container
                    width="100%"
                    height="100%"
                >
                    <ReactFlow 
                        nodes={nodes}
                        onNodesChanges={onNodesChanges}
                        edges={edges}
                        onEdgesChange={onEdgesChanges}
                        onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        >
                        <Background />
                        <Controls />
                        {/* <MiniMap /> */}
                    </ReactFlow>  
                </Container>

                <Container
                    //width="10%"
                    width="200px"

                    height="100%"
                    borderLeft={border_dark}
                >
                    detailed
                </Container>
            </Container>

            <Container
                fill
                height="5vh"
                backdrop={blur_15}
                background={black_60}
            >
                Status bar
            </Container>
            
        </Container>
        
    )
    
    
    
};

export default CodeEdit;
