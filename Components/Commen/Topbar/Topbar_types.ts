export type icon_screen = 'big_screen' | "small_screen" | "both"
type main_icon = {
    id :number , 
    icon : React.ReactNode ,
    find : icon_screen ,
    link :string
}
type left_icon = {
    id : number ,
    icon:React.ReactNode ,
    name:string
}
export type TopbarStaticdata = {
    main_icons : main_icon[],
    left_icons : left_icon[]
} 
