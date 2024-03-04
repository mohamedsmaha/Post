'use client'
import Topbar from '@/Components/Commen/Topbar/Topbar'
import ProfileShap from '@/Components/Pages/Profile/ProfileShap'
import { default_data_model } from '@/Helpers/Redux_models/Deafult_data/Deafult_data_class'
import "@/Scss/Pages/Profile/Profile.css"
function Profilepage(props : any) {
    const id = parseInt(props.params.id)
    console.log(id)
    return (
        
        <div className='ProfilePage'>
            <Topbar Page='Profile'/>  
            <div className="bottom">
                <ProfileShap id = {id}/>
            </div>
        </div>
    )
}

export default Profilepage