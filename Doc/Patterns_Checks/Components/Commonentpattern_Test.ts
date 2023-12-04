import { Components_Name } from "@/Doc/Tree/Components";
import { ComponentPattern_Check } from "./ComponentPattern_Check";

export const Tests: { [key in Components_Name]: ComponentPattern_Check } = {
    CreatePost          : { Design: 0, Code: 0, Info: 0, Lang: 0, Types: 0 , Finish : false },
    ConfiremData        : { Design: 0, Code: 0, Info: 0, Lang: 0, Types: 0 , Finish : false },
    FeedPosts           : { Design: 0, Code: 0, Info: 0, Lang: 0, Types: 0 , Finish : false },
    ForgetPassword      : { Design: 0, Code: 0, Info: 0, Lang: 0, Types: 0 , Finish : false },
    Login               : { Design: 0, Code: 0, Info: 0, Lang: 0, Types: 0 , Finish : false },
    Main_Search_Box     : { Design: 0, Code: 0, Info: 0, Lang: 0, Types: 0 , Finish : false },
    Notification        : { Design: 0, Code: 0, Info: 0, Lang: 0, Types: 0 , Finish : false },

    Post                : { Design: 0, Code: 5, Info: 2, Lang: 2, Types: 4 , Finish : false },

    PostForm            : { Design: 0, Code: 0, Info: 0, Lang: 0, Types: 0 , Finish : false },
    ProfileShap         : { Design: 0, Code: 0, Info: 0, Lang: 0, Types: 0 , Finish : false },
    Rightbar            : { Design: 0, Code: 0, Info: 0, Lang: 0, Types: 0 , Finish : false },
    Register            : { Design: 0, Code: 0, Info: 0, Lang: 0, Types: 0 , Finish : false },
    Sidebar             : { Design: 0, Code: 0, Info: 0, Lang: 0, Types: 0 , Finish : false },
    SuccessProcess      : { Design: 5, Code: 5, Info: 2, Lang: 2, Types: 4 , Finish : true },
    Topbar              : { Design: 5, Code: 5, Info: 2, Lang: 2, Types: 4 , Finish : false },
};