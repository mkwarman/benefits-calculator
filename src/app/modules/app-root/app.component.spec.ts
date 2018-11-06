import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
});
