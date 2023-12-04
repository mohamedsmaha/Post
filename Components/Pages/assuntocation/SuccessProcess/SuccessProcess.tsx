import { CheckCircle } from '@mui/icons-material';
import React from 'react'
import { Props } from './SuccessProcessTypes';
import { Translate} from '@/Helpers/Translate';

// Description 
    // when the user confirm the the email this show up
function SuccessProcess(props : Props) {
    return(
    <div className="SuccessProcess_Component">
        <CheckCircle/>
        <p>{props.Text}</p>
        <button  onClick={() => props.Sumbit()}>{Translate("Login")}</button>
    </div>
    )
}

export default SuccessProcess