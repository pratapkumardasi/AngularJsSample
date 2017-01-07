import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { APP_BASE_HREF } from '@angular/common';
import {routeModule } from './app.route';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component'



@NgModule({
    bootstrap: [AppComponent],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    imports: [
        BrowserModule, routeModule, HttpModule
    ],
    declarations: [
        AppComponent, AboutComponent, HomeComponent
    ],
})
export class AppModule {

}