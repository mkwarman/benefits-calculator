import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { CostCalculatorService } from '../../services/cost-calculator.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    employees: Employee[] = [];
    totalCost: number = 0;
    costCalculator: CostCalculatorService

    constructor(private _costCalculatorService: CostCalculatorService) {
        this.costCalculator = _costCalculatorService;
    }

    newEmployeeAdded(newEmployee: Employee) {
        this.employees.push({
            name: newEmployee.name,
            numDependents: newEmployee.numDependents,
            cost: this.costCalculator.calculateTotal(newEmployee)
        });

        this.totalCost = this.employees.reduce(this.getSum, 0);
    }

    getSum(num, employee) {
        return (employee.cost || 0) + num;
    }
}
