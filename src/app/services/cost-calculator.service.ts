import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
    providedIn: 'root'
})
export class CostCalculatorService {
    baseYearlyCost: number;
    dependentCost: number;
    nameDiscountPercent: number;
    nameDiscountPrefix: string;

    constructor() {
        this.baseYearlyCost = 1000;
        this.dependentCost = 500;
        this.nameDiscountPercent = 0.10;
        this.nameDiscountPrefix = 'a';
    }

    // Given an employee object, calculate the employee's benefits costs based on their
    //   number of dependents and their name.
    calculateBenefitsCost(employee: Employee): number {
        // Return null for bad data
        if (!employee || employee.name === null || employee.numDependents === null || !isFinite(employee.numDependents)) {
            return null;
        }

        // Factor in dependent costs
        let cost = this.baseYearlyCost + (this.dependentCost * employee.numDependents);

        // If eligible for name discount, apply discount
        if (this.eligibleForNameDiscount(employee.name)) {
            cost = cost * (1 - this.nameDiscountPercent);
        }

        return cost;
    }

    // Given the number of employees, return the total salary cost
    calculateSalaryCost(numEmployees) {
        // Return null for bad data
        if (!isFinite(numEmployees)) {
            return null;
        }

        // Assume employees are paid $2000 per paycheck and there are 26 paychecks in a year
        return 2000 * 26 * numEmployees;
    }

    // If name starts with configured nameDiscountPrefix, return true
    eligibleForNameDiscount(name: string): boolean {
        // Return null for bad data
        if (name === null) {
            return null;
        }

        // Normalize name to uppercase to match uppercase discount prefix value
        return (name.toLowerCase().startsWith(this.nameDiscountPrefix));
    }
}
