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
const employee_model_1 = require('./employee.model');
let EmployeeComponent = class EmployeeComponent {
    constructor() {
        this.employee = new employee_model_1.EmployeeModel("Dasi", "PratapKumar", true, "W2");
        this.languages = ["English", "Hindi", "Telugu"];
    }
};
EmployeeComponent = __decorate([
    core_1.Component({
        templateUrl: './app/employee/employeeadd.component.html',
        selector: 'emp-add'
    }), 
    __metadata('design:paramtypes', [])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employeeadd.component.js.map