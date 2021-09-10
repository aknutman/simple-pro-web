import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { JwtTokenService } from '../../services/login/jwt-token.service';

@Component({
  selector: 'app-room-main',
  templateUrl: './room-main.component.html',
  styleUrls: ['./room-main.component.css']
})
export class RoomMainComponent implements OnInit {
  subs: Subscription;

  constructor(private router: Router, private jwtToken: JwtTokenService) {}

  ngOnInit() {
    this.subs = this.jwtToken.sharedJwtToken.subscribe((result: string) => {
      if (result == '') {
        console.log('session is invalid, redirecting to login page');

        this.router.navigateByUrl('/');
      }
    });
  }

  ngOnDestroy() {
    this.jwtToken.setJwtToken('');

    this.subs.unsubscribe();
  }
}
