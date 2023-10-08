import { APP_Folders } from "./APP_Folders"

const Static_path = APP_Folders.AppImges()
export const Static_images = {
    main_logo    : `${Static_path}/logo.png` ,
    secound_logo : `${Static_path}/logo.png`  ,
    Gift         : `${Static_path}/gift.png`  ,
    Wave         : `${Static_path}/wave.png`  ,
    Reactions    : {"love" : `${Static_path}/heart.png`,
                    "like" : `${Static_path}/like.png `}

}
type Static_images = {
    "main_logo"     : string ,
    "secound_logo"  : string ,
    "Gift"          : string ,
    Reactions       :
    {
        "love"      : string ,
        "like"      : string
    }
}