import * as validators from './validators';
import { FormControl } from '@angular/forms';

describe('Validator', () => {
    describe('#dependentsValidator', () => {
        it('should allow null', () => {
            var control = new FormControl();
            control.setValue(null);

            const result = validators.dependentsValidator(control);

            expect(result).toBe(null);
        });

        it('should allow 0', () => {
            var control = new FormControl();
            control.setValue(0);

            const result = validators.dependentsValidator(control);

            expect(result).toBe(null);
       });

        it('should allow positive numbers', () => {
            var control = new FormControl();
            control.setValue(10);

            const result = validators.dependentsValidator(control);

            expect(result).toBe(null);
        });

        it('should not allow negative numbers', () => {
            var control = new FormControl();
            control.setValue(-10);
            const expectedResult = { 'notNullZeroOrPositive': { value: -10 } };

            const result = validators.dependentsValidator(control);

            expect(result).toEqual(expectedResult);
        });

        it('should not allow nonnumeric characters', () => {
            var control = new FormControl();
            control.setValue('f');
            const expectedResult = { 'notNullZeroOrPositive': { value: 'f' } };

            const result = validators.dependentsValidator(control);

            expect(result).toEqual(expectedResult);
        });
    });
});