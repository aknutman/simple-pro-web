import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class JwtTokenService {
  private jwtToken = new BehaviorSubject('');
  sharedJwtToken = this.jwtToken;

  constructor() { }

  setJwtToken(jwtToken: string){
    this.jwtToken.next(jwtToken);
  }

}