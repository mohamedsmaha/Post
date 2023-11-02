import { useAppSelector } from "@/Redux/Hooks"
import { User_Type } from "@/Redux/Modules/User/UserTypes"
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
}
export const User_Model = new User
