import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  loggedIn: boolean = false;
  constructor(private UserAuth: AuthService) {}
  ngOnInit() {
    this.UserAuth.isLoggedIn().subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });
  }
  logout() {
    this.UserAuth.signOut();
  }
}
