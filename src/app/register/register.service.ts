import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterService } from './../router.service';
@Injectable()
export class RegisterService {
    baseUrl: string;
    constructor(private http: HttpClient, private routerService: RouterService) {
        this.baseUrl = this.routerService.baseUrl;
    }

    createUser(userName, password,verifyPassWord, mobile) {
        return this.http.post(this.baseUrl + 'user', {
            userName: userName,
            password: password,
            verifyPassWord:verifyPassWord,
            mobile: mobile,
        });
    }

    removeUsers(id) {
        return this.http.delete(this.baseUrl + `user?id=${id}`);
    }

    updateUser(id, userName, mobile) {
        return this.http.put(this.baseUrl + `user/${id}`, {
            userName: userName,
            mobile: mobile
        })
    }

    login() {
        return this.http.get(this.baseUrl+`login`);
    }

}