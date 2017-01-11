
export class EmployeeModel {
    constructor(
        public lastName: string,
        public firstName: string, public isFullTime: boolean, public contractType: string, public selectedLanguage: string) {

    }
}