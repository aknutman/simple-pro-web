import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { JwtTokenService } from '../../services/login/jwt-token.service';

export interface menuNameType {
  value: string;
  name: string;
}

@Component({
  selector: 'app-room-main',
  templateUrl: './room-main.component.html',
  styleUrls: ['./room-main.component.css']
})
export class RoomMainComponent implements OnInit {
  subs: Subscription;
  username: string;

  selectedTitle: string = 'HOME PAGE';

  menuNames: menuNameType[] = [
    { value: 'dashboard', name: 'Dashboard' },
    { value: 'new-request', name: 'Permintaan' },
    { value: 'on-progress', name: 'Berlangsung' },
    { value: 'ratings', name: 'Rating' },
    { value: 'profile-one', name: 'UKPBJ' },
    { value: 'profile-two', name: 'PPK' },
    { value: 'profile-three', name: 'PP' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jwtToken: JwtTokenService
  ) {}

  ngOnInit() {
    this.subs = this.jwtToken.sharedJwtToken.subscribe((result: string) => {
      if (result == '') {
        // this.router.navigateByUrl('/');
      }
    });

    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
    });
  }

  ngOnDestroy() {
    this.jwtToken.setJwtToken('');

    this.subs.unsubscribe();
  }

  onSelectionChanges(options: string) {
    this.selectedTitle = this.menuNames.filter(
      item => item.value == options
    )[0].name;
  }
}
