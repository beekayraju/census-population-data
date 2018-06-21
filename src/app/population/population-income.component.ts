import { Component } from '@angular/core';

import { CensusDataService } from '../census-data.service';

@Component({
    selector: 'population-income',
    templateUrl: './population-income.component.html',
    providers: [ CensusDataService ]
})

export class PopulationIncomeComponent {
    data: any;
      constructor(private service: CensusDataService) {
        service.getData().subscribe((res) => {
            this.data = res;
        });
    }

    private selectedLink: string="AllIncome";        
    
        setradio(e: string): void   
            {  
                this.selectedLink = e;  
            }  
    
        isSelected(name: string): boolean   
            {  
                if (!this.selectedLink) { 
                    return false;  
            }  
                return (this.selectedLink === name);   
            }   
     //sorting
     key: string = 'income';
     reverse: boolean = false;
     sort(key){
         this.key = key;
         this.reverse = !this.reverse;
     }
     p: number = 1;
}