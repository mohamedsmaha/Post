import { useAppSelector } from "@/Redux/Hooks"

import { Box_info_type, UserAction, User_Type } from "@/Redux/Modules/User/UserTypes"
type options = "default_Redux" | "profile"
export class User{
    public defualt :options = "default_Redux"

    private find(): User_Type{
        return this.redux()[this.defualt]
    }
    private redux(){
        let redux : {[key in options] : any }= {
            default_Redux : useAppSelector((state) => state.User.data) ,
            profile       : useAppSelector((state) => state.Profile.data.user)
        }
        return redux
    }
    GetAll(){
        return this.find()
    }
    GetId(){
        return this.find().id
    }
    GetMainImg(){
        return this.find().img
    }
    GetSecoundImg(){
        return this.find().secound_img
    }
    GetName(){
        return this.find().Username
    }
    GetBoxinfo(){
        let info : Box_info_type = {
            "Status" : this.find().Status ,
            "Born"   : this.find().birthday,
            "From"   : this.find().From ,
            "Phone"  : this.find().Phonenumber
        }
        info = Object.fromEntries(Object.entries(info).filter(([_, v]) => v !== undefined));
        return info
    }
    Get_User_Action():UserAction | undefined{
        if(this.find().ApiToken == undefined){return undefined}
        else{
            return {
                "UserID"    : this.find().id         ,
                "UserToken" : this.find().ApiToken as string
            }
        }
    }
}
export const User_Model = new User
