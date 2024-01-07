import { useAppDispatch, useAppSelector } from "@/Redux/Hooks"
import { Fetch_Posts } from "@/Redux/Modules/Post/PostFetch";
import { PostRedux } from "@/Redux/Modules/Post/PostTypes";
import { useEffect } from "react";

class Posts {
    
    public  call_data(){
        const dispatch = useAppDispatch();
        useEffect(() => {
            dispatch(Fetch_Posts())
        }, []);
    }
    private redux() {
        let redux = {
            default_data : useAppSelector((state) => state.Posts)
        }
        return redux
    }
    public Get_Data () : PostRedux {
        return  this.redux().default_data
    }
}
export  const Posts_Model = new Posts