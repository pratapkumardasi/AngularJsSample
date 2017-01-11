import {Component } from '@angular/core';
import { EmployeeModel} from './employee.model';
@Component({
    templateUrl: './app/employee/employeeadd.component.html',
    selector: 'emp-add'
})
export class EmployeeComponent {
    employee: EmployeeModel = new EmployeeModel("Dasi", "PratapKumar", true, "W2", "default");
    languages: any[] = ["English", "Hindi", "Telugu"];
    showErrorForLanguage: boolean;
    SaveButtonClick() {
      //  alert('ok');
    }
    LanguageValidation(value) {
        if (value === "default")
            this.showErrorForLanguage = true;
        else
            this.showErrorForLanguage = false;
    }
}