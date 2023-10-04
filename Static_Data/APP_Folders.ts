export const APP_Folders : APP_Folders = {
    "ImgesFolders" : "./assets" ,
    Users(Num){return `${APP_Folders.ImgesFolders}/Persons/${Num}`},
    AppImges(){return `${APP_Folders.ImgesFolders}/Static_images`}
}
type APP_Folders = {
    "ImgesFolders" : string ,
    AppImges:() => string,
    Users: (Num : number) => string
}