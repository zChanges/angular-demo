import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import 'rxjs/add/operator/map';


@Injectable()
export class InterceptorService implements HttpInterceptor {
    token: string;
    constructor(private router: Router) {
    }
    // constructor(private router: Router,private _message: NzMessageService ) { 
    // }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<IResponse<any>>> {
        this.token = window.sessionStorage.getItem('token');
        const clonedRequest = req.clone({
            // headers: req.headers.set('Content-Type', 'application/json'),
            headers: req.headers.set('Authorization', `Bearer ${this.token}`),
            // withCredentials: true 
        });
        return next.handle(clonedRequest).map((event: HttpEvent<IResponse<any>>) => {
            if (event instanceof HttpResponse) {
                if (event.body) {
                    if (event.body.code === 0) {
                        let newEvent: HttpEvent<IResponse<any>> = event.clone({ body: event.body.result });
                        return newEvent;
                    } else if (event.body.code === -1) {
                        // this._message.create('error', event.body.message);
                        throw event.body.message;
                    } else if (event.body.code == 502) {
                        this.router.navigateByUrl('login');
                    }
                }
            }
            return event;
        })

    }
}


