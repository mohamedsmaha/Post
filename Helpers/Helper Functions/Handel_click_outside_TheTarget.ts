import { HTMLDivElementRef } from "@/Ts/Hooks_Types";


export function Handel_click_outside_thetarget(ref : HTMLDivElementRef , method : [Boolean , () => void]){
    return (event: MouseEvent) => {
            if (ref.current && method[0] &&
                !ref.current.contains(event.target as Node)) 
            {
                method[1]()
            }
        };
}