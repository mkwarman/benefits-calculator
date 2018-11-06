import { Component } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    employees: Employee[] = [];

    newEmployeeAdded(newEmployee: Employee) {
        this.employees.push({
            name: newEmployee.name,
            numDependents: newEmployee.numDependents
        });
    }
}
