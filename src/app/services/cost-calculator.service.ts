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

    calculateTotal(employee: Employee): number {
        // Return null for bad data
        if (!employee || employee.name === null || employee.numDependents === null || !isFinite(employee.numDependents)) {
            return null;
        }

        var cost = this.baseYearlyCost + (this.dependentCost * employee.numDependents);
        if (this.eligibleForNameDiscount(employee.name)) {
            cost = cost * (1 - this.nameDiscountPercent);
        }

        return cost;
    }

    private eligibleForNameDiscount(name: string): boolean {
        // Normalize name to uppercase to match uppercase discount prefix value
        return (name.toLowerCase().startsWith(this.nameDiscountPrefix));
    }
}
