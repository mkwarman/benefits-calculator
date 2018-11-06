import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title in a h1 tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Calculating Benefits Costs Is Hard.');
    });

    it('should render subtitle in a h5 tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h5').textContent).toContain('Let us do the hard part so you can get back to running your business.');
        expect(compiled.querySelector('h5').textContent).toContain('Enter your employees\' information below to get started:');
    });
});
