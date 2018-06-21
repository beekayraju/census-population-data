import { Component } from '@angular/core';

import { CensusDataService } from '../census-data.service';

@Component({
    selector: 'population-race',
    templateUrl: './population-race.component.html',
    providers: [ CensusDataService ]
})

export class PopulationReceComponent {
    data: any;
      constructor(private service: CensusDataService) {
        service.getData().subscribe((res) => {
            this.data = res;
        });
    }
    
    private selectedLink: string="AllRaces";        
    
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
    key: string = 'race';
    reverse: boolean = false;
    sort(key){
        this.key = key;
        this.reverse = !this.reverse;
    }
    p1: number = 1;
}