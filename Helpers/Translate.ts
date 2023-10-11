"use client"
import { Languagh } from "@/Lang/Main_file";
import { Words } from "@/Lang/Types/Languagh_model";
import { useAppSelector } from "@/Redux/Hooks";


export function Translate(Word : Words){
    let Redux = {
        DefaultData : useAppSelector((state) => state.DefaultData)
    }
    return Languagh[Redux.DefaultData.Lang][Word]
}