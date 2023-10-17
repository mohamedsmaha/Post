export type Propstype = {
    state_functions: { Appcontent: (value : "left" | "right") => void  }
}
export type  Shaps = "First" | "Secound" | "Third"
export type Static_Data = {
    Create_account_inputs : input[]
}
export type input = {id : number , label : string ,  placeholder ?: string ,type : string , check ?: boolean}