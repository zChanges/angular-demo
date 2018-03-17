import { Injectable } from '@angular/core';
import { zip } from 'rxjs/observable/zip';
import { HttpClient } from '@angular/common/http';

import { ReuseTabService } from '@delon/abc/reuse-tab';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Injectable()
export class StartupService {

    constructor(private httpClient: HttpClient, private reuseTabService: ReuseTabService) { }
    load(): Promise<any> {
        return new Promise((resolve, reject) => {
            zip(
                this.httpClient.get('assets/app-data.json')
            ).subscribe(([appData]) => {
                const res: any = appData;
                // this.route.params.subscribe(params => {
                //     console.log(params)
                //     this.reuseTabService.title = '11'
                // });
                console.log(this.reuseTabService)
                resolve(appData) 
            }, () => {
                resolve(null);
            });
        });
    }
}