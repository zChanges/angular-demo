import { Injectable } from '@angular/core';

@Injectable()
export class RouterService {
    baseUrl:string;
    constructor() { 
        this.baseUrl = 'http://127.0.0.1:7001/api/'
    }

}