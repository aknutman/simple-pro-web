import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { JwtTokenService } from '../../services/login/jwt-token.service';

@Component({
  selector: 'app-room-main',
  templateUrl: './room-main.component.html',
  styleUrls: ['./room-main.component.css']
})
export class RoomMainComponent implements OnInit {
  subs: Subscription;

  constructor(private jwtToken: JwtTokenService) {}

  ngOnInit() {
    this.subs = this.jwtToken.sharedJwtToken.subscribe(result => {
      console.log(result);
    });
  }

  ngOnDestroy(){
    this.jwtToken.setJwtToken('');

    this.subs.unsubscribe();
  }
}
