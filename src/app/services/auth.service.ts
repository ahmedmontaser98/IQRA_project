import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public fireAuth: AngularFireAuth, private router: Router) {}
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/home']);
      },
      (err) => {
        alert('invalid email or password');
      }
    );
  }
  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/login']);
    });
  }
  signOut() {
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/home']);
    });
  }
  isLoggedIn(): Observable<boolean> {
    return this.fireAuth.authState.pipe(
      map((user) => !!user) // Convert user to boolean value
    );
  }
}
