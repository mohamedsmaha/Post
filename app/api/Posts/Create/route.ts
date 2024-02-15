import { Posts_DataBase_Model } from '@/Imaginary Databases/Posts';
import { PostShap } from '@/Redux/Modules/Post/PostTypes';
import { NextRequest, NextResponse } from 'next/server';

export  async function POST(req: NextRequest){

    const data       = await req.json() 
    const new_post   = Posts_DataBase_Model.Insert(data['Data'])
    return NextResponse.json(new_post)
}
