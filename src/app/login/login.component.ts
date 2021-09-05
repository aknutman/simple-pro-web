import { Component, OnInit } from '@angular/core';

import { StrapiLoginService } from '../services/login/strapi-login.service';
import { LoadingBarService } from '../services/loading/loading-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  durationInSeconds = 5;

  constructor(
    private slogin: StrapiLoginService,
    private loadingbar: LoadingBarService
  ) {}

  ngOnInit() {}

  loginAction(username: string, password: string) {
    this.loadingbar.setLoadingAnimation(true);

    this.slogin.gLogin(username, password).subscribe(
      result => {
        console.log(result);

        this.loadingbar.setLoadingAnimation(false);
      },
      error => {
        console.log(error);

        this.loadingbar.setLoadingAnimation(false);
      }
    );
  }
}
