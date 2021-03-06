"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const forms_1 = require('@angular/forms');
const platform_browser_1 = require('@angular/platform-browser');
const common_1 = require('@angular/common');
const app_route_1 = require('./app.route');
const http_1 = require('@angular/http');
const app_component_1 = require('./app.component');
const home_component_1 = require('./home/home.component');
const about_component_1 = require('./about/about.component');
const employeeadd_component_1 = require('./employee/employeeadd.component');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        providers: [
            { provide: common_1.APP_BASE_HREF, useValue: '/' }
        ],
        imports: [
            platform_browser_1.BrowserModule, app_route_1.routeModule, http_1.HttpModule, forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent, about_component_1.AboutComponent, home_component_1.HomeComponent, employeeadd_component_1.EmployeeComponent
        ],
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map