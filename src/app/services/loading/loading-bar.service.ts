import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingBarService {
  constructor() {}

  private loadingAnimation = new BehaviorSubject(false);
  sharedLoadingAnimation = this.loadingAnimation;

  setLoadingAnimation(isDisplay: boolean) {
    this.loadingAnimation.next(isDisplay);
  }
}
