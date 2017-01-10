import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { APP_BASE_HREF } from '@angular/common';

import {routeModule } from './app.route';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {EmployeeComponent} from './employee/employeeadd.component';


@NgModule({
    bootstrap: [AppComponent],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    imports: [
        BrowserModule, routeModule, HttpModule, FormsModule
    ],
    declarations: [
        AppComponent, AboutComponent, HomeComponent, EmployeeComponent
    ],
})
export class AppModule {

}