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
const homedataservice_1 = require('./homedataservice');
let HomeComponent = class HomeComponent extends core_1.OnInit {
    constructor(homeService) {
        super();
        this.homeService = homeService;
        this.welcomeMsg = "";
        this.welcomeMsg = "Harry";
    }
    ngOnInit() {
        this.detailsMap = this.homeService.getFamilyMembers();
        //this.getFamilyDetails();
    }
    getFamilyDetails() {
        this.homeService.getFamilyMembers()
            .subscribe(data => this.details = data, err => {
            console.log(err);
        });
    }
};
HomeComponent = __decorate([
    core_1.Component({
        templateUrl: './app/home/home.component.html',
        selector: 'app-home',
        providers: [homedataservice_1.HomeDataService]
    }), 
    __metadata('design:paramtypes', [homedataservice_1.HomeDataService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map