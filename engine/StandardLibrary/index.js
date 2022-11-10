import { Container } from "../../components/container"
import { white, object_getnode, object_background, 
    boolean_getnode, number_getnode, string_getnode, 
    vector_getnode, number_background, string_background, 
    vector_background, boolean_background, gray } from "../../styles/GlobalColors"
import BeginProgram from "../StandardNodes/BeginProgramNode"

const var_colors = [boolean_getnode, number_getnode, string_getnode, vector_getnode, object_getnode]
const var_set_colors = [boolean_background, number_background, string_background, vector_background, object_background]





const EventStyle = {
    background: "#A80D00",
    color: white,
}

const FlowControlStyle = {
    background: "#7C7C7C"
}

const VariableSetStyle = {
    background: var_set_colors[Math.floor(Math.random() * 5)],
    color: white,
}

const VariableGetStyle = {
    background: var_colors[Math.floor(Math.random() * 5)],
    color: white,
    borderRadius: "20px"
}


export const Event_Begin = {
    id: "event_begin",
    type: "eventBegin",
    position: { x: 0, y: 0},
}

export const Event_Updated = {
    id: "event_update",
    style: EventStyle,
    data: { label: "Updated"},
    position: { x: 0, y: 70},
    sourcePosition: "right",
    type: 'input'
}

export const Flow_For = {
    id: "flow_for",
    style: FlowControlStyle,
    data: { label: "For Loop"},
    position: { x: 170, y: 0},
    sourcePosition: "right",
    targetPosition: "left",
    type: 'flowFor'
}

export const Flow_Branch = {
    id: "flow_branch",
    style: FlowControlStyle,
    data: { label: "Branch"},
    position: { x: 170, y: 100},
    type: "flowBranch",
    sourcePosition: "right",
    targetPosition: "left",
}

export const Var_Set = {
    id: "var_set",
    style: VariableSetStyle,
    data: { label: "Set Bool_01"},
    position: { x: 170, y: 180},
    sourcePosition: "right",
    targetPosition: "left",
}

export const Var_Get = {
    id: "var_get",
    style: VariableGetStyle,
    data: { label: "Bool_01"},
    position: { x: 170, y: 250},
    type: "output",
    sourcePosition: "right",
}


