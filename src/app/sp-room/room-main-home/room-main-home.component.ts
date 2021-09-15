import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-main-home',
  templateUrl: './room-main-home.component.html',
  styleUrls: ['./room-main-home.component.css']
})
export class RoomMainHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }

}