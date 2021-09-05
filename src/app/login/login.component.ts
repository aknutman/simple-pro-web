import { Component, OnInit } from '@angular/core';

import { StrapiLoginService } from '../services/login/strapi-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  durationInSeconds = 5;

  constructor(private slogin: StrapiLoginService) {}

  ngOnInit() {}

  loginAction(username: string, password: string) {
    this.slogin.gLogin(username, password).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }
}
