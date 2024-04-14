"use client"
import Rightbar from '@/Components/Commen/Rightbar/Rightbar'
import Sidebar from '@/Components/Commen/Sidebar/Sidebar'
import Topbar from '@/Components/Commen/Topbar/Topbar'
import { default_data_model } from '@/Helpers/Redux_models/Deafult_data/Deafult_data_class'
import "@/Scss/Pages/Home/Home.css"
import { redirect } from 'next/navigation'
import CreatePost from '@/Components/Commen/Post/Create_Post/Create_Post'
import FeedPosts from '@/Components/Commen/Feed_Posts/FeedPosts'
import { useEffect, useRef, useState } from 'react'
import { Posts_Model } from '@/Helpers/Redux_models/Posts/Posts.Class'

export default function Home() {
  let ref1              = useRef<HTMLDivElement>(null)
  const { loading } = Posts_Model.Get_Data();
  


  useEffect(() => {
    // Solving Scroll Jump Problem
        if(loading.Select == false){
        ref1.current?.scrollTo(0 , 0 )
  } }, [loading.Select] )
  // Redux  
  return (
    <>
      <div className='HomePage'>
        {default_data_model.GetLogin() ?  null : redirect("./assuntocation")}
        <Topbar Page='Home'/>
        <div ref = {ref1}className="bottom">
          <Sidebar/>
          <div className="Feed">
            <CreatePost Page="Home" />
            <FeedPosts Page="Home"/>
          </div>
          <Rightbar/>
        </div>
      </div>
    </>
  )
}
