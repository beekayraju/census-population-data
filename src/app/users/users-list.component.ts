import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service'
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Routes, RouterModule} from '@angular/router';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'users',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  id: any;
  userListing: any;
  
  constructor(private usersService: UsersService,
  private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.items = this.usersService.getUsers();
    this.id = this.route.snapshot.params['id'];

     this.usersService.getUsersDetails(this.id).subscribe(userListing => {
      this.userListing = userListing;
    });
  }

  remove(user) {
    this.usersService.deleteUser(user)
  }
  
}