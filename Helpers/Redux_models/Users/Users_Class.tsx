import { useAppSelector } from "@/Redux/Hooks"
import { Check_User_Login } from "@/Redux/Modules/User/UserFetch";

import { Box_info_type, NormaL_User_Type, UserAction, UserRedux, User_Login_Request, User_Type } from "@/Redux/Modules/User/UserTypes"
type options = "Main_User" | "Profile_User"
class Commen_Functions{
    private defualt :options ;
    constructor(data : options){
        this.defualt = data
    }
    public find(): NormaL_User_Type | User_Type{
        return this.redux()[this.defualt]
    }
    public redux(){
        let redux : {[key in options] : any }= {
            Main_User     : useAppSelector((state) => state.User.data) ,
            Profile_User       : useAppSelector((state) => state.Profile.data.User)
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
            "Phone"  : this.find().Phonenumber ,
            "Email"  : this.find().Email
            
        }
        info = Object.fromEntries(Object.entries(info).filter(([_, v]) => v !== undefined));
        return info
    }
}
// For Main User
export class User extends Commen_Functions{
    constructor(){
        super("Main_User")
    }
    private Call_Fetch(fun1 : Function , fun2 : Function , Data : any ){
        fun1(fun2(Data))
    }
    Get_User_Action():UserAction{
        return {
                "UserID"    : this.find().id         ,
                "UserToken" : this.redux().Main_User.ApiToken 
            }
        
    }
    Check_Login(fun1:Function , Data: User_Login_Request){
        this.Call_Fetch(fun1 , Check_User_Login , Data)
    }  
}
// For Any User Expect include the Main one
export class NormaL_User extends Commen_Functions {
    constructor(){
        super("Profile_User")
    }
}
export const User_Model = new User
