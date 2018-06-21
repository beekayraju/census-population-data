import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { DataTablesModule } from 'angular-datatables';

@Injectable()

export class CensusDataService {
    
    constructor (private http : Http) {}

    getData(): Observable<any> {

        return this.http.get('./assets/data/census-data.json')
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
        
    }
     
}