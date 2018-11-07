import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AddEmployeeComponent,
                EmployeeTableComponent,
                HeaderComponent
            ],
            imports: [FormsModule, ReactiveFormsModule],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('#getSum should return sum of num and employee.cost', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const component = fixture.componentInstance;
        const employee = {
            cost: 10
        };
        
        const result = component.getSum(15, employee);

        expect(result).toBe(25);
    })

    it('#newEmployeeAdded should calculate cost and add new employee to employees list', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const component = fixture.componentInstance;
        const newEmployee: Employee = {
            name: 'test',
            numDependents: 2,
        }
        const expectedResult: Employee[] = [
            <Employee>{
                name: 'test',
                numDependents: 2,
                cost: 2000
            }
        ]

        component.newEmployeeAdded(newEmployee);

        expect(component.employees).toEqual(expectedResult);
    })
});
