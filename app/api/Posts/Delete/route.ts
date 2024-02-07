import { Delete_Post } from "@/Redux/Modules/Post/PostTypes";
import { NextRequest, NextResponse } from "next/server";

export  async function POST(req: NextRequest){
    const data = await req.json()
    return NextResponse.json(data['Data']['Post_id'])
}