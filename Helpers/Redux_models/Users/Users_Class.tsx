import { useAppSelector } from "@/Redux/Hooks"

class User{
    private redux(){
        let redux = {
            default_data : useAppSelector((state) => state.User)
        }
        return redux
    }
    GetAll(){
        return this.redux().default_data
    }
    GetId(){
        return this.redux().default_data.data.id
    }
}
export const User_Model = new User