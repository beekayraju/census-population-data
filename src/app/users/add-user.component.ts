import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

//import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service'

import { Routes, RouterModule} from '@angular/router';
import { UsersListComponent } from '../users/users-list.component';


import { Users } from '../users/Users';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html'
})

export class AddUserComponent implements OnInit {
  
  public user: Users;
  usersList: any;
  nextItemNumber: number;

  constructor(public router: Router, private userData: UsersService) {
    this.usersList = userData.getUsers();
    this.user = {
      name: '',
      email: '',
      phone: ''
    }
}

  ngOnInit() {
  }

  addUser() {
    this.userData.addUser(this.user);
    console.log('added!');

    this.router.navigate(['/home/users']);
  }
}

