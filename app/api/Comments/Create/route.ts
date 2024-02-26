

import { Comments_DateBase_Model } from "@/Imaginary Databases/Comments"
import { Create_Comment } from "@/Redux/Modules/Comments/CommentTypes"
import { NextRequest, NextResponse } from "next/server"


export  async function POST(req: NextRequest){
    const date = await req.json() 
    return NextResponse.json(Comments_DateBase_Model.Create(date['Date'] as Create_Comment))
}