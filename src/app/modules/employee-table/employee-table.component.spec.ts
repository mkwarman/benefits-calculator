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
                numDependents: 1
            },
            <Employee>{
                name: 'Employee Two',
                numDependents: 2
            },
            <Employee>{
                name: 'Employee Three',
                numDependents: 3
            }
        ];

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('tbody tr:nth-child(1) :nth-child(1)').textContent).toContain('1');
        expect(compiled.querySelector('tbody tr:nth-child(1) :nth-child(2)').textContent).toContain('Employee One');
        expect(compiled.querySelector('tbody tr:nth-child(1) :nth-child(3)').textContent).toContain('1');
        // TODO: cost
        // expect(compiled.querySelector('tbody tr:nth-child(1) :nth-child(3)').textContent).toContain('1');

        expect(compiled.querySelector('tbody tr:nth-child(2) :nth-child(1)').textContent).toContain('2');
        expect(compiled.querySelector('tbody tr:nth-child(2) :nth-child(2)').textContent).toContain('Employee Two');
        expect(compiled.querySelector('tbody tr:nth-child(2) :nth-child(3)').textContent).toContain('2');
        // TODO: cost
        // expect(compiled.querySelector('tbody tr:nth-child(1) :nth-child(3)').textContent).toContain('1');

        expect(compiled.querySelector('tbody tr:nth-child(3) :nth-child(1)').textContent).toContain('3');
        expect(compiled.querySelector('tbody tr:nth-child(3) :nth-child(2)').textContent).toContain('Employee Three');
        expect(compiled.querySelector('tbody tr:nth-child(3) :nth-child(3)').textContent).toContain('3');
        // TODO: cost
        // expect(compiled.querySelector('tbody tr:nth-child(1) :nth-child(3)').textContent).toContain('1');
    })
});
