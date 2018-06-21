import { Component } from '@angular/core';

import { CensusDataService } from '../census-data.service';

@Component({
    selector: 'population-age',
    templateUrl: './population-age.component.html',
    providers: [ CensusDataService ]
})

export class PopulationAgeComponent {
    data: any;
      constructor(private service: CensusDataService) {
        service.getData().subscribe((res) => {
            this.data = res;
        });
    }
    private selectedLink: string="AllAges";        
    
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
    key: string = 'age';
    reverse: boolean = false;
    sort(key){
        this.key = key;
        this.reverse = !this.reverse;
    }
    p: number = 1;
}