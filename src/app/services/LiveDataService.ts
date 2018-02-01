import { Injectable } from '@angular/core';
import {HttpClientAPI} from './HttpClient';
import {DataService} from './DataService';
import {API_URI} from './apiUri';

import { find } from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Injectable()
export class LiveDataService extends DataService {

    constructor(public http: HttpClientAPI) {
      super();
    }
    public getUserData(): Observable<any> {
      return this.http.get(API_URI.userDataUrl);
    }
    // public gruopBy(value: any[], field: any): Array<any> {
    //     const groupedObj = value.reduce((prev, cur) => {
    //         if (!prev[cur[field]]) {
    //             prev[cur[field]] = [cur];
    //           } else {
    //             prev[cur[field]].push(cur);
    //
    //           }
    //       return prev;
    //     }, {});
    //     return Object.keys(groupedObj).map(key => {
    //         return { key, value: groupedObj[key] };
    //     });
    // }
    // public mapData( data: any[]) {
    //     const arr = [];
    //
    //     data.forEach(( obj, ind ) => {
    //         arr.push({
    //             department: obj.key,
    //             totalEmployee: obj.value.length,
    //             salaried: obj.value.filter( o => o['2602057'].toLowerCase() === 's').length,
    //             hourly: obj.value.filter( o => o['2602057'].toLowerCase() === 'h').length
    //         });
    //     });
    //
    //     return arr;
    // }
    //
    // public count( arr, prop ) {
    //     let obj = {};
    //     arr.sort((a, b) => {
    //         let x = a[prop].toLowerCase(), y = b[prop].toLowerCase();
    //         if ( x < y )
    //             return -1;
    //         if ( x > y )
    //             return 1;
    //         return 0;
    //     });
    //
    //     var current = null;
    //     var cnt = 0;
    //     for (var i = 0; i < arr.length; i++) {
    //         if (arr[i][prop] != current) {
    //             if (cnt > 0) {
    //                 obj[current] = cnt;
    //             }
    //             current = arr[i][prop];
    //             cnt = 1;
    //         } else {
    //             cnt++;
    //         }
    //     }
    //     if (cnt > 0) {
    //         obj[current] = cnt;
    //     }
    //     return obj;
    // }

}

