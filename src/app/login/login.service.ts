import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterService } from './../router.service';

@Injectable()
export class LoginService {

    baseUrl: string;
    constructor(private http: HttpClient, private routerService: RouterService) {
        this.baseUrl = this.routerService.baseUrl;
    }


    login(userName,password) {
        return this.http.post(this.baseUrl+`login`,{
            userName:userName,
            password:password
        })
    }
 


}
