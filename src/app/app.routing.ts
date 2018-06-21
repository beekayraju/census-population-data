import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PopulationDataComponent } from './population/population-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { UsersListComponent } from './users/users-list.component';
import { AddUserComponent } from './users/add-user.component';
import { EditUserComponent } from './users/edit-user.component';


import { AuthGuard } from './services/auth-guard.service';


const routes : Routes = [
    { path: '',  component: LoginComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent},
        { path: 'population-data', component: PopulationDataComponent},
        { path: 'users', component: UsersListComponent },
        { path: 'add-user', component: AddUserComponent},
        { path: 'edit-user/:id', component: EditUserComponent},
        { path: 'reports', component: ReportsComponent },
        { path: 'settings', component: SettingsComponent }
    ] },
   
]

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports : [

    ],

})
export class AppRoutingModule {

}
