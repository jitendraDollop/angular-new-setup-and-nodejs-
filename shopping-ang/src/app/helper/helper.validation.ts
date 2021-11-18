import { isNull } from '@angular/compiler/src/output/output_ast';
import { FormGroup } from '@angular/forms';
export function contactLength()
{
    return function(userReg : FormGroup)
    {
        let conLen = userReg.controls.contact;
        if(conLen.errors && ! conLen.errors.conErr)
        {
            return;
        }
        if(conLen.value.length < 10)
        {
            conLen.setErrors({ conErr : true });
        }
        else
        {
            conLen.setErrors(null);
        }
    }
}

export function contactNumberError()
{
    return function(userReg : FormGroup)
    {
        let conNumber = userReg.controls.contact;

        if(conNumber.errors && ! conNumber.errors.conNumErr)
        {
            return;
        }
        if(isNaN(conNumber.value)==true)
        {
            conNumber.setErrors({ conNumErr : true })
        }
        else
        {
            conNumber.setErrors(null);
        }
    }
}

export function passwordRepasswordErrors()
{
    return function(userReg : FormGroup)
    {
        let pass = userReg.controls.password;
        let rePass = userReg.controls.re_password;

        if(rePass.errors && ! rePass.errors.passErr)
        {
            return;
        }
        if(pass.value != rePass.value)
        {
            rePass.setErrors({ passErr : true });
        }
        else
        {
            rePass.setErrors(null);
        }
    }
}



