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
    benefitsCost = 0;
    salaryCost = 0;
    costCalculator: CostCalculatorService;

    constructor(private _costCalculatorService: CostCalculatorService) {
        this.costCalculator = _costCalculatorService;
    }

    // When a new employee is added, add it to the list and then update costs
    newEmployeeAdded(newEmployee: Employee) {
        this.employees.push({
            name: newEmployee.name,
            numDependents: newEmployee.numDependents,
            cost: this.costCalculator.calculateBenefitsCost(newEmployee)
        });

        this.calculateCosts();
    }

    // When an employee is removed, remove it from the list and update costs
    employeeRemoved(index: number) {
        this.employees.splice(index, 1);
        this.calculateCosts();
    }

    // When employee list is reset, reset the employee list (to empty) and update costs (to zero)
    resetEmployees() {
        this.employees = [];
        this.calculateCosts();
    }

    // Calculate the sum of benefits costs for all employees and save it in benefitsCost
    //   Calculate the sum of salary costs for all employees and save it in salaryCost
    calculateCosts() {
        this.benefitsCost = this.employees.reduce(this.getSum, 0);
        this.salaryCost = this.costCalculator.calculateSalaryCost(this.employees.length);
    }

    // Reducer function to calculate the sum of employee cost values
    getSum(num, employee) {
        return (employee.cost || 0) + num;
    }
}
