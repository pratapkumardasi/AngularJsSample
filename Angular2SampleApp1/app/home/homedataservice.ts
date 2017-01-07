import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeDataService {

    private url: string = './app/home/familyMembers.json';
    constructor(private http: Http) {

    }
    //List of all the family members
    getFamilyMembers(): Observable<Family[]> {
        return this.http.get(this.url)
            .map(data => data.json())
            .catch(err => Observable.throw(err) || 'Server Error');
    }
    //Add a member


    //Display member details

}

export interface Family {
    Name: string;
    Relation: string;
    Age: number;
    Description: string;
}