import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

import { CensusDataService } from './census-data.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [ CensusDataService ]
})
export class HomeComponent implements OnInit {

   constructor(public authService: AuthService) { }

  ngOnInit() {
    //this.authService.signOut();
  }
}