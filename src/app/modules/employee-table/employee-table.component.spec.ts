import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Employee } from '../../models/employee';
import { EmployeeTableComponent } from './employee-table.component';

describe('EmployeeTableComponent', () => {
    let component: EmployeeTableComponent;
    let fixture: ComponentFixture<EmployeeTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeeTableComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeeTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render input employees', () => {
        component.employees = [
            <Employee>{
                name: 'Employee One',
                numDependents: 1,
                cost: 1500
            },
            <Employee>{
                name: 'Employee Two',
                numDependents: 2,
                cost: 2000
            },
            <Employee>{
                name: 'Employee Three',
                numDependents: 3,
                cost: 2500
            },
            <Employee>{
                name: 'A Employee Four',
                numDependents: 4,
                cost: 2700
            }
        ];
        component.benefitsCost = 8700;
        component.salaryCost = 208000;

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(1) :nth-child(1)').textContent).toContain('1');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(1) :nth-child(2)').textContent).toContain('Employee One');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(1) :nth-child(3)').textContent).toContain('1');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(1) :nth-child(4)').textContent).toContain('$2,000.00');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(1) :nth-child(5)').textContent).toContain('$1,500.00');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(1) :nth-child(6)').textContent).toContain('$3,500.00');

        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(2) :nth-child(1)').textContent).toContain('2');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(2) :nth-child(2)').textContent).toContain('Employee Two');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(2) :nth-child(3)').textContent).toContain('2');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(2) :nth-child(4)').textContent).toContain('$2,000.00');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(2) :nth-child(5)').textContent).toContain('$2,000.00');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(2) :nth-child(6)').textContent).toContain('$4,000.00');

        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(3) :nth-child(1)').textContent).toContain('3');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(3) :nth-child(2)').textContent).toContain('Employee Three');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(3) :nth-child(3)').textContent).toContain('3');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(3) :nth-child(4)').textContent).toContain('$2,000.00');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(3) :nth-child(5)').textContent).toContain('$2,500.00');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(3) :nth-child(6)').textContent).toContain('$4,500.00');

        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(4) :nth-child(1)').textContent).toContain('4');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(4) :nth-child(2)').textContent).toContain('A Employee Four');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(4) :nth-child(3)').textContent).toContain('4');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(4) :nth-child(4)').textContent).toContain('$2,000.00');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(4) :nth-child(5)').textContent).toContain('$2,700.00');
        expect(compiled.querySelector('tbody:nth-child(2) tr:nth-child(4) :nth-child(6)').textContent).toContain('$4,700.00');

        expect(compiled.querySelector('tbody:nth-child(3) tr:nth-child(1) :nth-child(1)').textContent).toContain('Total:');
        expect(compiled.querySelector('tbody:nth-child(3) tr:nth-child(1) :nth-child(4)').textContent).toContain('$208,000.00');
        expect(compiled.querySelector('tbody:nth-child(3) tr:nth-child(1) :nth-child(5)').textContent).toContain('$8,700.00');
        expect(compiled.querySelector('tbody:nth-child(3) tr:nth-child(1) :nth-child(6)').textContent).toContain('$216,700.00');
    })
});
