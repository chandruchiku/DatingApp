import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in Sucessfully');
      this.alertify.success('Logged in Sucessfully');
    }, error => {
      console.log('Failed to Login', error);
      this.alertify.error('Failed to Login: \n' + error);
    });
  }

  loggedIn() {
      return this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    console.log('Logged out');
    this.alertify.message('Logged out!');
  }

}
