
import { useAppSelector } from "@/Redux/Hooks";

class default_data {
    private redux(){
        let redux = {
            default_data : useAppSelector((state) => state.DefaultData)
        }
        return redux
    }
    GetLogin(){
        return this.redux().default_data.Login
    }
    GetColorTheme(){
        return this.redux().default_data.ColorTheme
    }
    GetLang(){
        return this.redux().default_data.Lang
    }
    GetAll(){
        return this.redux()
    }
}
export const  default_data_model = new default_data