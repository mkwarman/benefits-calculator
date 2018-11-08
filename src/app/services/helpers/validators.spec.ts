import * as validators from './validators';
import { FormControl } from '@angular/forms';

describe('Validator', () => {
    describe('#dependentsValidator', () => {
        it('should allow null', () => {
            const control = new FormControl();
            control.setValue(null);

            const result = validators.dependentsValidator(control);

            expect(result).toBe(null);
        });

        it('should allow 0', () => {
            const control = new FormControl();
            control.setValue(0);

            const result = validators.dependentsValidator(control);

            expect(result).toBe(null);
       });

        it('should allow positive numbers', () => {
            const control = new FormControl();
            control.setValue(10);

            const result = validators.dependentsValidator(control);

            expect(result).toBe(null);
        });

        it('should not allow negative numbers', () => {
            const control = new FormControl();
            control.setValue(-10);
            const expectedResult = { 'notNullZeroOrPositive': { value: -10 } };

            const result = validators.dependentsValidator(control);

            expect(result).toEqual(expectedResult);
        });

        it('should not allow nonnumeric characters', () => {
            const control = new FormControl();
            control.setValue('f');
            const expectedResult = { 'notNullZeroOrPositive': { value: 'f' } };

            const result = validators.dependentsValidator(control);

            expect(result).toEqual(expectedResult);
        });
    });
});
