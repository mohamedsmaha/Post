import { CheckCircle } from '@mui/icons-material';
import React from 'react'
import { Props } from './SuccessProcessTypes';
import { Translate} from '@/Helpers/Translate';

function SuccessProcess(props : Props) {
    return(
    <div className="FinishProcess_Component">
        <CheckCircle/>
        <p>{props.Text}</p>
        <button  onClick={() => props.Sumbit()}>{Translate("Login")}</button>
    </div>
    )
}

export default SuccessProcess