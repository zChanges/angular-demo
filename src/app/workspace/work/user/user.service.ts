import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterService } from './../../../router.service';

@Injectable()
export class UserService {
    private _baseUrl: string;
    constructor(private _routServe: RouterService, private http: HttpClient) {
        this._baseUrl = this._routServe.baseUrl;
    }

    getUser(userName, mobile, role,currentPage,pageSize) {
        return this.http.get(`${this._baseUrl}user?userName=${userName}&mobile=${mobile}&role=${role}&currentPage=${currentPage}&pageSize=${pageSize}`);
    }

    removeUsers(id) {
        return this.http.delete(`${this._baseUrl}user?id=${id}`);
    }


    updateUser(id, userName, mobile) {
        return this.http.put(`${this._baseUrl}user/${id}`, {
            userName: userName,
            mobile: mobile
        })
    }

}