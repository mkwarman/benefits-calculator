import { AbstractControl } from '@angular/forms';

// Value must be positive, zero, or null
export function dependentsValidator(control: AbstractControl) {
    if (control.value === null || (isFinite(control.value) && Number(control.value) >= 0)) {
        return null;
    }
    return { 'notNullZeroOrPositive': { value: control.value } };
}
