export type Helper_Functions = {
    adjustTextareaHeight : (element : HTMLTextAreaElement) => void , 
    Show_Contentinfo_image : (element : HTMLInputElement ) => void ,
    Show_Contentinfo_Videos: (element : HTMLInputElement)  => void ,
    Handel_Hide_Click      : (element :React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export type Props_type = {
    Close :  () => void
}