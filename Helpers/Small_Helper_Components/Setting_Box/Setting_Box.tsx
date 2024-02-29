import React, { useEffect, useRef } from 'react'
import { Handel_click_outside_thetarget } from '../../Helper Functions/Handel_click_outside_TheTarget';
import { DispatchSetStateAction, HTMLDivElementRef } from '@/Ts/Hooks_Types';
import { MoreVert } from '@mui/icons-material';
export type Setting_element = {"name" : string , "onclick" : () => void}
function Setting_Box(Props : {"elements" : Setting_element[] 
, Control_ref : {value : Boolean , "State_Function" : DispatchSetStateAction<boolean>}}) {
  const {elements}  = Props
  const Show_state  = Props.Control_ref.value
  const State_Fun   = Props.Control_ref.State_Function
  function Small_Component(){
      const Setting_Ref:HTMLDivElementRef       = useRef(null)   
        useEffect(() => {
            const HandleClickOutsideTheSetting = 
            Handel_click_outside_thetarget(Setting_Ref , [Show_state , () => State_Fun(false)])
            // Close the post setting box if the click is not on it
            document.addEventListener("click", HandleClickOutsideTheSetting);
            return () => {
                document.removeEventListener("click", HandleClickOutsideTheSetting);
            };
        }, [Show_state]);
      return (
        <div className='Setting_Box' ref ={Setting_Ref}>
            <div className="container">
                <ul>
                  {elements.map((item , index) => (
                      <li key={index} onClick={() => {
                        State_Fun(false)
                        item.onclick()}}>{item.name}</li>
                  ))}
                </ul>
            </div>
        </div>
      )
  }
  return <>
      <div className="Setting">
          <span onClick={() => State_Fun(!Show_state)}> <MoreVert/></span>
          {Show_state ? 
          <Small_Component/> 
          : null}
      </div>
  </>
}

export default Setting_Box