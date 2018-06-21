import { Component } from '@angular/core';
//import 'rxjs/add/operator/map'
//import { Observable } from 'rxjs';

import { CensusDataService } from '../census-data.service';

@Component({
    selector: 'population',
    templateUrl: './population.component.html',
    providers: [ CensusDataService ]
})

export class PopulationComponent {
    data: any;
    populationCount: number = 0;
    populationMoeCount: number = 0;
    populationUninsuredCount: number = 0;
    populationUninsuredMoeCount: number = 0;
    populationUninsuredMPctCount: number = 0;
     populationUninsuredMPctMoeCount: number = 0;
      constructor(private service: CensusDataService) {
        service.getData().subscribe((res) => {
            this.data = res;
            if(this.data){
                for(var  i=0; i<this.data.length; i++)
                {
                    this.populationCount += this.data[i].Population;
                    this.populationMoeCount += this.data[i].PopulationMOE;
                    this.populationUninsuredCount += this.data[i].Uninsured;
                    this.populationUninsuredMoeCount += this.data[i].UninsuredMOE;
                    this.populationUninsuredMPctCount += this.data[i].UninsuredPct;
                    this.populationUninsuredMPctMoeCount += this.data[i].UninsuredPctMOE;
                }
            }
        });
    }
    
 //sorting
 key: string = 'country';
 reverse: boolean = false;
 sort(key){
     this.key = key;
     this.reverse = !this.reverse;
 }
 p: number = 1;
}
