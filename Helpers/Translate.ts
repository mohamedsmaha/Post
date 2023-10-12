"use client"
import { Languagh } from "@/Lang/Main_file";
import {  Translate_components, Words , Merge_With_Component_Name, Components_Elements } from "@/Lang/Types/Languagh_model";
import { useAppSelector } from "@/Redux/Hooks";


export function Translate(Word : Words){
    let Redux = {
        DefaultData : useAppSelector((state) => state.DefaultData)
    }
    return Languagh[Redux.DefaultData.Lang][Word]
}
export function Translate_Object(component: Translate_components) : Components_Elements {
    type index_component_type = `${Translate_components}${Merge_With_Component_Name}`;
    let index_component: index_component_type = `${component}Object`;
    
    let Redux = {
        DefaultData: useAppSelector((state) => state.DefaultData)
    };
    
    return Languagh[Redux.DefaultData.Lang][index_component] 
}