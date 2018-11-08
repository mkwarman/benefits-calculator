import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
    selector: 'app-employee-table',
    templateUrl: './employee-table.component.html',
    styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {
    @Input()
    employees: Employee[] = [];

    @Input()
    benefitsCost: number = 0;

    @Input()
    salaryCost: number = 0;

    @Output()
    removeEmployee: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    removeAll: EventEmitter<any> = new EventEmitter();

    handleRemoveAll() {
        this.removeAll.emit(null);
    }

    handleRemoveEmployee(index) {
        this.removeEmployee.emit(index);
    }
}
