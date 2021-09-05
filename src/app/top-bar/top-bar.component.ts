import { Component, OnInit } from '@angular/core';

import { LoadingBarService } from '../services/loading/loading-bar.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  showProgressBar: boolean;

  constructor(private loadingbar: LoadingBarService) {}

  ngOnInit() {
    this.loadingbar.sharedLoadingAnimation.subscribe(isDisplayed => {
      this.showProgressBar = isDisplayed;
    });
  }
}
