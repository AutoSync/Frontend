import {    boolean_background, boolean_background_dark ,boolean_icon,
            number_background, number_background_dark ,number_icon,
            string_background,string_icon, string_background_dark,
            vector_background, vector_background_dark, vector_icon,
            object_background, object_background_dark, object_icon
} from "../../styles/GlobalColors";
import { useState, useEffect } from 'react';    
import { Container } from "../../components/container";

export const center = "center"
export const space_between = "space-between"
export const start = "start"
export const none = "none"
export const baseline = "base-line"

export const Coloris = (color_type) => {
    const colorset = {background: "black", background_dark: "white", color: "white", icon: "gray"}
    switch(color_type)
    {
     case "boolean":
         colorset.background = boolean_background
         colorset.icon = boolean_icon
         colorset.color = "white"
         colorset.background_dark = boolean_background_dark
         break;
     case "number":
        colorset.background = number_background
        colorset.icon = number_icon
        colorset.color = "white"
        colorset.background_dark = number_background_dark
         break;
     case "string":
        colorset.background = string_background
        colorset.icon = string_icon
        colorset.color = "white"
        colorset.background_dark = string_background_dark
         break;
    case "vector":
        colorset.background = vector_background
        colorset.icon = vector_icon
        colorset.color = "white"
        colorset.background_dark = vector_background_dark
        break;
    case "object":
        colorset.background = object_background
        colorset.icon = object_icon
        colorset.color = "white"
        colorset.background_dark = object_background_dark
    }
    return colorset
 }

 export const IndentifyGenerate = () =>{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 15; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 export const renderByType = ({type, identifier, value}) => {

    switch(type)
    {
        case "function":
            return (<Container>
                Function Props
            </Container>)
        case "variable":
            return (
                <Container>
                    {

                    }
                </Container>
            )
        default:
            return <Container>None</Container>
    }

 }
