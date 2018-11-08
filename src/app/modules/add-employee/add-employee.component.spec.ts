import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Employee } from '../../models/employee';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee.component';

describe('AddEmployeeComponent', () => {
    let component: AddEmployeeComponent;
    let fixture: ComponentFixture<AddEmployeeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddEmployeeComponent],
            imports: [FormsModule, ReactiveFormsModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddEmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should consider form invalid without required fields populated', () => {
        expect(component.form.valid).toBeFalsy();
    });

    it('should consider form valid without numDependents populated', () => {
        component.form.controls['employeeName'].setValue('Employee Name');
        expect(component.form.valid).toBeTruthy();
    });

    it('should emit employee object when form valid', () => {
        component.form.value.employeeName = 'Employee Name';
        component.form.value.numDependents = 2;

        component.addEmployee.subscribe(e => {
            expect(e).toEqual(<Employee>{
                name: 'Employee Name',
                numDependents: 2
            });
        });
        component.onAdd();
    });

    it('#dismissAlert should fix formcontrol', () => {
        const formControl = new FormControl();
        formControl.markAsTouched();
        formControl.markAsDirty();
        formControl.setValue('junk');

        const result = component.dismissAlert(formControl);

        expect(formControl.pristine).toBe(true);
        expect(formControl.touched).toBe(false);
        expect(formControl.value).toBe(null);
    });
});
