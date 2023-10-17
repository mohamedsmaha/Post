import { CheckCircle, TrainSharp } from '@mui/icons-material';
import React from 'react'
import { Props } from './FinishProcesstypes';
import { Translate, Translate_Object } from '@/Helpers/Translate';
import { AssuntocationElementsLangType } from '@/Lang/Types/Components/Assuntocation';

function FinishProcess(props : Props) {
    return(
    <div className="FinishProcess_Component">
        <CheckCircle/>
        <p>{props.Text}</p>
        <button  onClick={() => props.Sumbit()}>{Translate("Login")}</button>
    </div>
    )
}

export default FinishProcess