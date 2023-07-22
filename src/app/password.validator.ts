import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{
    const password = control.get('Password');
    const confirmpassword = control.get('ConfirmPassword');

    const isPasswordMatching = password && confirmpassword && password?.value === confirmpassword?.value;
   
    return !isPasswordMatching
            ? { passwordMatchError : true }
            : null; 
}