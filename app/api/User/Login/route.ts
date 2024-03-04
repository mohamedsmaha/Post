

import { User_DataBase_Model } from "@/Imaginary Databases/Users"
import { NextRequest, NextResponse } from "next/server"


export  async function POST(req: NextRequest){
    const data = await req.json()
    return NextResponse.json(User_DataBase_Model.Check_User(data['Data']))
}