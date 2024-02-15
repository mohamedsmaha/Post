import { Posts_DataBase_Model } from "@/Imaginary Databases/Posts"
import { Post_Filter } from "@/Redux/Modules/Post/PostTypes"

import { NextRequest, NextResponse } from "next/server"


export  async function POST(req: NextRequest){
    const data = await req.json()
    return NextResponse.json(Posts_DataBase_Model.Get(data['Data'] as Post_Filter))
}