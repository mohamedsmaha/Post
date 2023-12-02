// D => Design 5 points
// C => Code   5 points
// I => info   2 points
// L => Lang   4 points
// T => Types  4 points
export type ComponentPattern_Check = {
    Design  : 0 | 1 | 2 | 3 | 4 | 5
    Code    : 0 | 1 | 2 | 3 | 4 | 5
    Info    : 0 | 1 | 2 ,
    Lang    : 0 | 1 | 2 | 3 | 4 ,
    Types   : 0 | 1 | 2 | 3 | 4 ,
    Finish  : boolean
}