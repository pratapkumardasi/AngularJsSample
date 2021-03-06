﻿import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { EmployeeComponent } from './employee/employeeadd.component';
const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'employee', component: EmployeeComponent }
];
export const routeModule: ModuleWithProviders = RouterModule.forRoot(routes);