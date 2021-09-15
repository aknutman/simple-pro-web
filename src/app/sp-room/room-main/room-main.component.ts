import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Subscription } from 'rxjs';

import { JwtTokenService } from '../../services/login/jwt-token.service';

export interface menuNameType {
  value: string;
  name: string;
  back: boolean;
}

@Component({
  selector: 'app-room-main',
  templateUrl: './room-main.component.html',
  styleUrls: ['./room-main.component.css']
})
export class RoomMainComponent implements OnInit {
  subs: Subscription;
  username: string;

  readonly project_home_string: string = 'Paket Pengadaan';

  selectedTitle: string = this.project_home_string;
  backButton: boolean = false;

  backUrl: string;

  menuNames: menuNameType[] = [
    { value: 'dashboard', name: 'Dashboard', back: false },
    { value: 'new-request', name: 'Permintaan', back: true },
    { value: 'on-progress', name: 'Berlangsung', back: true },
    { value: 'ratings', name: 'Rating', back: true },
    { value: 'profile-one', name: 'UKPBJ', back: false },
    { value: 'profile-two', name: 'PPK', back: false },
    { value: 'profile-three', name: 'PP', back: false }
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

    // Get previous url route
    this.router.events.subscribe(param => {
      if (param instanceof NavigationEnd) {
        const val = param.url.replace('detail', '').split('/');

        // Remove last element
        val.pop();

        let valval = '';
        val.forEach(item => {
          if (item.length > 0) {
            valval = valval + '/' + item;
          }
        });

        this.backUrl = valval;
      }
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

    this.backButton = this.menuNames.filter(
      item => item.value == options
    )[0].back;
  }

  backAction() {
    this.selectedTitle = this.project_home_string;
    this.backButton = false;
  }
}
