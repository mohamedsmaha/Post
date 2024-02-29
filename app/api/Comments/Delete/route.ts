import { Comments_DateBase_Model } from "@/Imaginary Databases/Comments"
import { Delete_Comment } from "@/Redux/Modules/Comments/CommentTypes"

import { NextRequest, NextResponse } from "next/server"


export  async function POST(req: NextRequest){
    const data = await req.json() 
    return NextResponse.json(Comments_DateBase_Model.Delete(data['Date'] as Delete_Comment))
}