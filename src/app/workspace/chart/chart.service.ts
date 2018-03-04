import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterService } from './../../router.service';
@Injectable()
export class ChartService {
    baseUrl:string;
    constructor(private _routServe: RouterService,private http:HttpClient) {
        this.baseUrl = this._routServe.baseUrl;
    }
}