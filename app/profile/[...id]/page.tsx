'use client'
import Topbar from '@/Components/Commen/Topbar/Topbar'
import  { Profile_memo } from '@/Components/Pages/Profile/ProfileShap'
import { default_data_model } from '@/Helpers/Redux_models/Deafult_data/Deafult_data_class'
import { Posts_Model } from '@/Helpers/Redux_models/Posts/Posts.Class'
import "@/Scss/Pages/Profile/Profile.css"
import { redirect } from 'next/navigation'
import { useEffect, useRef } from 'react'
function Profilepage(props : any) {
    const id          = parseInt(props.params.id)
    const { loading } = Posts_Model.Get_Data();
    let ref1          = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Solving Scroll Jump Problem
            if(loading.Select == false){
            ref1.current?.scrollTo(0 , 0 )
    } }, [loading.Select] )

    return (
        <div className='ProfilePage'>
            {default_data_model.GetLogin() ?  null : redirect("../assuntocation")}
            <Topbar Page='Profile'/>  
            <div ref = {ref1} className="bottom">
                <Profile_memo id = {id}/>
            </div>
        </div>
    )
}

export default Profilepage