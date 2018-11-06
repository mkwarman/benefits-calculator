import { Component, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
    employeeName = '';
    numDependents = 0;

    @Output()
    addEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();

    onAdd() {
        this.addEmployee.emit(<Employee>{
            name: this.employeeName,
            numDependents: this.numDependents
        });

        // Reset input fields
        this.employeeName = '';
        this.numDependents = 0;
    }
}
