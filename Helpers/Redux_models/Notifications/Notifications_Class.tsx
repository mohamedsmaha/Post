import { useAppSelector } from "@/Redux/Hooks"

class Notifications {
    private redux(){
        let redux = {
            default_data : useAppSelector((state) => state.Notifications)
        }
        return redux
    }
    GetAll(){
        return this.redux().default_data
    }
}
export const Notification_Model = new Notifications