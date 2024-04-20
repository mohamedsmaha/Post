import React, { useEffect, useState } from 'react'
import "@/Scss/Small_Helper_Components/AvaliableBox/Avaliablebox.css"
function AvaliableBox(Props : {value : boolean | null}) {
  const [firsttime , setfirst ] =  useState<Boolean | null>(null)
  const [Word      , SetWord  ] =  useState<"Active" | "UnActive" |''>('')
  useEffect(() => {
    logic()
  } , [Props.value])
  function logic(){
    if(Props.value == true){SetWord("Active")}
    else if(firsttime == null){SetWord("")}
    else {SetWord("UnActive")}
    if(firsttime != Props.value){setfirst(Props.value)}
    return;
  }
  return (
    <div className={`Space ${Word}`}>
      <div className={`Ball ${Word}`}>
      </div>
    </div>
  )
}

export default AvaliableBox