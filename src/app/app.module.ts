import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';


import { AppComponent } from './app.component';
import { CensusDataService } from './census-data.service';
import { PopulationDataComponent } from './population/population-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule} from './app.routing';  

import { PopulationComponent } from './population/population.component';
import { PopulationAgeComponent } from './population/population-age.component';
import { PopulationSexComponent } from './population/population-sex.component';
import { PopulationIncomeComponent } from './population/population-income.component';
import { PopulationReceComponent } from './population/population-race.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { UsersListComponent } from './users/users-list.component';
import { AddUserComponent } from './users/add-user.component';
import { PopulationByAgeComponent } from './dashboard/population/population-by-age.component';
import { PopulationByCountryComponent } from './dashboard/population/population-by-country.component';
import { EditUserComponent } from './users/edit-user.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { UsersService } from './services/users.service';

import { AngularFireDatabase } from 'angularfire2/database-deprecated';



import { Ng2SearchPipeModule } from 'ng2-search-filter' //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

export const firebaseConfig = {
  apiKey: "AIzaSyBQBdXrw8bNENFmpCh5pQouqFugkOAxBHg",
    authDomain: "census-population-data.firebaseapp.com",
    databaseURL: "https://census-population-data.firebaseio.com",
    projectId: "census-population-data",
    storageBucket: "census-population-data.appspot.com",
    messagingSenderId: "198348019813"
}

@NgModule({
  declarations: [
    AppComponent,
    PopulationDataComponent,
    DashboardComponent,
    PopulationComponent,
    PopulationAgeComponent,
    PopulationSexComponent,
    PopulationIncomeComponent,
    PopulationReceComponent,
    ReportsComponent,
    SettingsComponent,
    LoginComponent,
    HomeComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent,
    PopulationByAgeComponent,
    PopulationByCountryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'census-population-data'),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    Ng2SearchPipeModule, //including into imports
    Ng2OrderModule, // importing the sorting package here
    NgxPaginationModule
  ],
  providers: [CensusDataService, AuthService, AuthGuard, UsersService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
