import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http } from '@angular/http';
import {  HomeDataService, Family } from './homedataservice';

@Component({
    templateUrl: './app/home/home.component.html',
    selector: 'app-home',
    providers: [HomeDataService]
})
export class HomeComponent extends OnInit {
    welcomeMsg: string = "";
    details: Family[];
    detailsMap: Observable<Family[]>;
    constructor(private homeService: HomeDataService) {
        super();
        this.welcomeMsg = "Harry";
    }
    ngOnInit(): void {
        this.detailsMap = this.homeService.getFamilyMembers();
        //this.getFamilyDetails();
    }
    getFamilyDetails(): void {
        this.homeService.getFamilyMembers()
            .subscribe(data => this.details = data, err => {
                console.log(err)
            });
    }
}