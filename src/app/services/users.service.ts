import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireList } from 'angularfire2/database';

import { Injectable } from '@angular/core';

import { Users } from '../users/Users';

@Injectable()
export class UsersService {

  userListings: FirebaseListObservable<any[]>;
  userListing: FirebaseObjectObservable<any>;

  constructor(private af: AngularFireDatabase) {
    this.userListings = this.af.list('/users') as FirebaseListObservable<Users[]>
  }

  getUsers(): FirebaseListObservable<any[]> {
    return this.af.list('/users'); 
 }

  getUsersDetails(id){
    this.userListing = this.af.object('/users/'+id) as FirebaseObjectObservable<Users>
    return this.userListing;
  }
  updateUser(id, userListing){
    return this.userListings.update(id, userListing);
  }
  addUser(user: Users) {
    return this.af.list('/users').push(user);
  }

  deleteUser(user: any) {
    return this.af.list('/users').remove(user)
  }

}