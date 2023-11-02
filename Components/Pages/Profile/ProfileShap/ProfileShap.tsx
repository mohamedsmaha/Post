import React from 'react'
import { Props } from './ProfileShapTypes'
import { Profile_Model } from '@/Helpers/Redux_models/Profile/Profile_Class'
import { APP_Folders } from '@/Static_Data/APP_Folders'
import "@/Scss/Pages/Profile/ProfileShap/ProfileShap.css"
import { MoreHoriz, PersonAdd } from '@mui/icons-material'
import Share from '@/Components/Commen/Share/Share'
function ProfileShap(props : Props) {
    function TopPart(){
        return (
            <div className="Top">
                <img className='SecoundImg' src={`${APP_Folders.Profile_Background()}/${Profile_Model.GetUser().GetSecoundImg()}`} alt="" />
                <div className="smallinfo">
                    <img className='MainImg'    src={`${APP_Folders.Users()}/${Profile_Model.GetUser().GetMainImg()}`} alt="" />
                    <div className="Box">
                        <p className="username">
                            {Profile_Model.GetUser().GetName()}
                        </p>
                        <div className="actions">
                            <button><PersonAdd/> Add Friend</button>
                            <MoreHoriz/>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
    return (
        <div className="ProfileShap_Component">
            <TopPart/>  
            <div className="middel"></div>
            <div className="bottom">
                <div className="left">
                    <div className="info_box"></div>
                    <div className="friends"></div>
                </div>
                <div className="right">
                    <div className="share"><Share/></div>
                    <div className="posts"></div>
                </div>
            </div>
        </div>        
    )
}

export default ProfileShap