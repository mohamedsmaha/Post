import { CheckCircle, TrainSharp } from '@mui/icons-material';
import React from 'react'
import { Props } from './FinishProcesstypes';
import { Translate } from '@/Helpers/Translate';

function FinishProcess(props : Props) {
    return(
    <div className="FinishProcess">
        <CheckCircle/>
        <p>Your account has been successfully created</p>
        <button  onClick={() => props.Sumbit()}>{Translate("Login")}</button>
    </div>
    )
}

export default FinishProcess