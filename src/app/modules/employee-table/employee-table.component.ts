import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Employee } from '../../models/employee';

@Component({
    selector: 'app-employee-table',
    templateUrl: './employee-table.component.html',
    styleUrls: ['./employee-table.component.scss'],
    animations: [
        trigger('showHide', [
            state('show', style({
                opacity: 1,
            })),
            state('hide', style({
                opacity: 0,
            })),
            transition('show <=> hide', animate('0.2s ease')),
        ]),
        trigger('employeesTrigger', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('0.2s ease', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate('0.2s ease', style({ opacity: 0 }))
            ])
        ])
    ]
})
export class EmployeeTableComponent {
    @Input()
    employees: Employee[] = [];

    @Input()
    benefitsCost = 0;

    @Input()
    salaryCost = 0;

    @Output()
    removeEmployee: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    removeAll: EventEmitter<any> = new EventEmitter();

    // Emit removeAll
    handleRemoveAll() {
        this.removeAll.emit(null);
    }

    // Emit removeEmployee with employee index value
    handleRemoveEmployee(index) {
        this.removeEmployee.emit(index);
    }
}
