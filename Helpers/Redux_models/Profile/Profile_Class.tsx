import { useAppSelector } from "@/Redux/Hooks"
import { inherits } from "util"
import { User } from "../Users/Users_Class"

class Profile {
    private User_Model = new User
    constructor(){
        this.User_Model.defualt = "profile" 
    }
    private redux() {
        let redux = {
            default_data : useAppSelector((state) => state.Profile)
        }
        return redux
    }
    private find(){
        return this.redux().default_data
    }
    GetAll(){
        return this.find()
    }
    GetUser(){
        return this.User_Model
    }

}
export  const Profile_Model = new Profile