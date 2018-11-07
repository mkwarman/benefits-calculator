import { TestBed } from '@angular/core/testing';
import { Employee } from '../models/employee';
import { CostCalculatorService } from './cost-calculator.service';

describe('CostCalculatorService', () => {
    beforeEach(() => TestBed.configureTestingModule({
    }));

    it('should be created', () => {
        const service: CostCalculatorService = TestBed.get(CostCalculatorService);
        expect(service).toBeTruthy();
    });

    it('should correctly calculate costs', () => {
        const service: CostCalculatorService = TestBed.get(CostCalculatorService); 

        // Some of these are impossible, but we don't want to blow up in the event of bad data
        const testEmployees = [
            {
                name: 'doesnt start with a',
                dependents: 0,
                expectedCost: 1000
            },
            {
                name: 'doesn\'t start with a either',
                dependents: 1,
                expectedCost: 1500
            },
            {
                name: '3456234',
                dependents: 10,
                expectedCost: 6000
            },
            {
                name: '',
                dependents: 1000,
                expectedCost: 501000
            },
            {
                name: 'aardvark',
                dependents: 0,
                expectedCost: 900
            },
            {
                name: 'Aardvark',
                dependents: 1,
                expectedCost: 1350
            },
            {
                name: 'aardvark',
                dependents: 5,
                expectedCost: 3150
            },
            {
                name: 'doesnt start with a',
                dependents: -1,
                expectedCost: 500
            },
            {
                name: 'doesnt start with a',
                dependents: 'f',
                expectedCost: null
            },
            {
                name: 'doesnt start with a',
                dependents: "2",
                expectedCost: 2000
            },
            {
                name: null,
                dependents: 0,
                expectedCost: null
            },
            {
                name: 'doesnt start with a',
                dependents: null,
                expectedCost: null
            }
        ];

        testEmployees.map(testEmployee => {
            const employee = {
                name: testEmployee.name,
                numDependents: testEmployee.dependents
            };
            expect(service.calculateTotal(<Employee>employee)).toBe(testEmployee.expectedCost);
        });
    })
});
