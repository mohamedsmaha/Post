export type Props_type = {
    Page      : "Home"      | "Profile"      , 
}
export type Static_Data = {
    Options : option[]
}
type option = {id : number , text : string , icon : React.ReactNode}