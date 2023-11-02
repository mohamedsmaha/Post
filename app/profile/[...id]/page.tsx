'use client'
import Topbar from '@/Components/Commen/Topbar/Topbar'
import ProfileShap from '@/Components/Pages/Profile/ProfileShap/ProfileShap'
import "@/Scss/Pages/Profile/Profile.css"
function Profilepage(props : any) {
    const id = parseInt(props.params.id)
    return (
        <div className='ProfilePage'>
            <Topbar/>  
            <div className="bottom">
                <ProfileShap id = {id}/>
            </div>
        </div>
    )
}

export default Profilepage