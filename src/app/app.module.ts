import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './modules/app-root/app.component';
import { HeaderComponent } from './modules/header/header.component';
import { AddEmployeeComponent } from './modules/add-employee/add-employee.component';
import { EmployeeTableComponent } from './modules/employee-table/employee-table.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AddEmployeeComponent,
        EmployeeTableComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
