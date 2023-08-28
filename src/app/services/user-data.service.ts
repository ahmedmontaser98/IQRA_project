import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { User } from '../model/user';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userCollection: AngularFirestoreCollection<User>;
  // rates$: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection<User>('Users');
  }
  addUser(user: User) {
    user.id = this.afs.createId();
    return this.userCollection.add(user);
  }
}
