export const APP_Folders : APP_Folders = {
    "ImgesFolders" : `/assets` ,
    Users(){return `${APP_Folders.ImgesFolders}/Persons`},
    AppImges(){return `${APP_Folders.ImgesFolders}/Static_images`},
    Posts(kind){
        const path = `${APP_Folders.ImgesFolders}/Posts`
        if(kind == "images"){
            return `${path}/images`
        }
        return `${path}/videos`
    },
    Profile_Background(){
        {return `${APP_Folders.ImgesFolders}/Profile_Background`}
    }
}
type APP_Folders = {
    "ImgesFolders" : string ,
    AppImges:() => string,
    Users: () => string,
    Posts:(kind : "images" | "videos") => string,
    Profile_Background:() => string
}