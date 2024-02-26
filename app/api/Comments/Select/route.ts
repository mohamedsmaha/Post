import { Comments_DateBase_Model } from "@/Imaginary Databases/Comments"
import { Posts_DataBase_Model } from "@/Imaginary Databases/Posts"
import { Comments_Filter, Select_Comments_Api_Response } from "@/Redux/Modules/Comments/CommentTypes"
import { Post_Filter } from "@/Redux/Modules/Post/PostTypes"

import { NextRequest, NextResponse } from "next/server"


export  async function POST(req: NextRequest){
    const date = await req.json() 
    return NextResponse.json(Comments_DateBase_Model.Select(date['Date'] as Comments_Filter))
}