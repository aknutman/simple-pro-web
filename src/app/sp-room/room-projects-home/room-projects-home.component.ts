import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-room-projects-home',
  templateUrl: './room-projects-home.component.html',
  styleUrls: ['./room-projects-home.component.css']
})
export class RoomProjectsHomeComponent implements OnInit, OnDestroy {
  urlSubs: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }

  ngOnDestroy(){
  }
}
