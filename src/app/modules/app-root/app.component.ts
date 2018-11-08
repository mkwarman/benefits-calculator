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
    benefitsCost: number = 0;
    salaryCost: number = 0;
    costCalculator: CostCalculatorService

    constructor(private _costCalculatorService: CostCalculatorService) {
        this.costCalculator = _costCalculatorService;
    }

    newEmployeeAdded(newEmployee: Employee) {
        this.employees.push({
            name: newEmployee.name,
            numDependents: newEmployee.numDependents,
            cost: this.costCalculator.calculateBenefitsCost(newEmployee)
        });

        this.calculateCosts();
    }

    employeeRemoved(index: number) {
        this.employees.splice(index, 1);
        this.calculateCosts();
    }

    resetEmployees() {
        this.employees = [];
        this.calculateCosts();
    }

    calculateCosts() {
        this.benefitsCost = this.employees.reduce(this.getSum, 0);
        this.salaryCost = this.costCalculator.calculateSalaryCost(this.employees.length);
    }

    getSum(num, employee) {
        return (employee.cost || 0) + num;
    }
}
