type unite = "Year" | "Month" | "Week" | "Day" | "Hour" | "Minute" | "Second"
type sum   = "s" | ""
export type TimeUnites = `${unite}${sum}`
export type time         = {"number" : number , "unite" : TimeUnites }
