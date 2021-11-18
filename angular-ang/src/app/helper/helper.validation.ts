import { FormGroup } from '@angular/forms';

export function contactErr(){
    return function(userReg : FormGroup){
        let contact = userReg.controls.contact;

        if(contact.errors && ! contact.errors.conErr)
        {
            return;
        }
        if(contact.value.length < 10)
        {
            contact.setErrors({ conErr : true});
        }
        else
        {
            contact.setErrors(null);
        }
    }

}

export function conNumberError(){
    return function(userReg : FormGroup)
    {
        let conNum = userReg.controls.contact;

        if(conNum.errors && ! conNum.errors.numErr)
        {
            return;
        }

        if(isNaN(conNum.value)==true)
        {
            conNum.setErrors({ numErr : true });
        }
        else
        {
            conNum.setErrors(null);
        }
    }
}

export function passwordError(){
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
            rePass.setErrors({ passErr : true});
        }
        else
        {
            rePass.setErrors(null);
        }
    }
}

export function passwordCharector(){
    return function(userReg : FormGroup){
        let passCha = userReg.controls.password;
        if(passCha.errors && ! passCha.errors.passChaErr){
            return;
        }
        if(passCha.value.length < 6){
            passCha.setErrors({ passChaErr : true });
        }
        else
        {
            passCha.setErrors(null);
        }
    }
}
