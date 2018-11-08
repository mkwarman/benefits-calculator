import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../../models/employee';
import * as customValidators from '../../services/helpers/validators';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
    form: FormGroup;

    @Output()
    addEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        // Build the new employee form
        this.form = this._formBuilder.group({
            'employeeName': ['', Validators.required],
            'numDependents': ['', customValidators.dependentsValidator]
        });
    }

    // On add, emit new employee object and reset form
    onAdd() {
        this.addEmployee.emit(<Employee>{
            name: this.form.value.employeeName,
            numDependents: this.form.value.numDependents || 0
        });

        this.form.reset();
    }

    get employeeName() {
        return this.form.get('employeeName');
    }

    get numDependents() {
        return this.form.get('numDependents');
    }
}
