import { Component } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

import { CensusDataService } from './census-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ CensusDataService ]
})
export class AppComponent {
   
}
