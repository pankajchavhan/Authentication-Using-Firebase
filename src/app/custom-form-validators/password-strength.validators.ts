import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function PasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        const value = control.value;
        if (!value) {
            return null;
        }
        const passwordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(value);

        return !passwordValid ? {passwordStrength:true}: null;
    }
}