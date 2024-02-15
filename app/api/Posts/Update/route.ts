import { Posts_DataBase_Model } from "@/Imaginary Databases/Posts";
import { Create_Post } from "@/Redux/Modules/Post/PostTypes";
import { NextRequest, NextResponse } from "next/server";
let arr = []
export  async function POST(req: NextRequest){
    const data = await req.json()
    const new_post = Posts_DataBase_Model.Update(data['Data'] as Create_Post)
    return NextResponse.json(new_post)
}