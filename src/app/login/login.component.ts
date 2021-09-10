import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { StrapiLoginService } from '../services/login/strapi-login.service';
import { LoadingBarService } from '../services/loading/loading-bar.service';
import { JwtTokenService } from '../services/login/jwt-token.service';

export interface loginReturnType {
  data: {
    login: {
      jwt: string;
      user: {
        id: string;
        username: string;
      }
    }
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  durationInSeconds = 5;

  constructor(
    private router: Router,
    private slogin: StrapiLoginService,
    private snackBar: MatSnackBar,
    private loadingbar: LoadingBarService,
    private jwtToken: JwtTokenService
  ) {}

  ngOnInit() {}

  loginAction(username: string, password: string) {
    this.loadingbar.setLoadingAnimation(true);

    this.slogin.gLogin(username, password).subscribe(
      (result: loginReturnType) => {
        console.log(result);

        this.jwtToken.setJwtToken(result.data.login.jwt);
        this.router.navigateByUrl('/u/' + result.data.login.user.username);

        this.loadingbar.setLoadingAnimation(false);
      },
      error => {
        console.log(error);

        this.loadingbar.setLoadingAnimation(false);

        this.openSnackBar();
      }
    );
  }

  openSnackBar() {
    this.snackBar.openFromComponent(WrongCredSnackbarComponent, {
      duration: this.durationInSeconds * 1000
    });
  }
}

@Component({
  selector: 'app-wrong-cred',
  templateUrl: 'wrong-cred-snackbar.component.html',
  styleUrls: ['./login.component.css']
})
export class WrongCredSnackbarComponent {}
