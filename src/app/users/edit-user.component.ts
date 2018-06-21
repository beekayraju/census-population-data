import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

//import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service'

import { Routes, RouterModule} from '@angular/router';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { UsersListComponent } from '../users/users-list.component';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent implements OnInit {
  id;
  name;
  email;
  phone;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.usersService.getUsersDetails(this.id).subscribe(userListing => {
      this.name = userListing.name;
      this.email = userListing.email;
      this.phone = userListing.phone;
    });
  }

  onEditSubmit(){
    let userListing = {
        name: this.name,
        email: this.email,
        phone: this.phone,
    }

    this.usersService.updateUser(this.id, userListing);

    this.router.navigate(['../home/users']);
  }

}
