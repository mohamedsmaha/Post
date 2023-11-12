"use client"
import Rightbar from '@/Components/Commen/Rightbar/Rightbar'
import Share from '@/Components/Commen/Share/Share'
import Sidebar from '@/Components/Commen/Sidebar/Sidebar'
import Topbar from '@/Components/Commen/Topbar/Topbar'
import FeedPosts from '@/Components/Pages/Home/FeedHome'
import { default_data_model } from '@/Helpers/Redux_models/Deafult_data/Deafult_data_class'
import "@/Scss/Pages/Home/Home.css"
import { redirect } from 'next/navigation'
export default function Home() {
  // Redux  
  return (
    <div className='HomePage'>
      {default_data_model.GetLogin() ?  null : redirect("./assuntocation")}
      <Topbar/>
      <div className="bottom">
        <Sidebar/>
        <div className="Feed">
          <Share Page="Home" />
          <FeedPosts/>
        </div>
        <Rightbar/>
      </div>
    </div>
  )
}
