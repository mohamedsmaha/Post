
import { Posts_DataBase_Model } from "@/Imaginary Databases/Posts";
import { Delete_Post } from "@/Redux/Modules/Post/PostTypes";
import { NextRequest, NextResponse } from "next/server";

export  async function POST(req: NextRequest){
    const data = await req.json()
    const index = Posts_DataBase_Model.Get().findIndex(item => item.main_post.id === data['Data']['Post_id']);
    Posts_DataBase_Model.Delete(index)
    return NextResponse.json(data['Data']['Post_id'])
}