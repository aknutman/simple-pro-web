import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  mediaSub: Subscription;
  deviceXs: boolean;

  constructor(private mediaObserver: MediaObserver) {}

  ngOnInit() {
    this.mediaSub = this.mediaObserver.asObservable().subscribe(result => {
      this.deviceXs = result[0].mqAlias == 'xs' ? true : false;
    });
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
