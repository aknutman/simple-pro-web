import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class StrapiLogin {
  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.graphqlUrl;
  }

  // userLogin(username: string, password: string) {
  //   const data = 
  //   {

  //   };

  //   return this.http.post<any>(this.url, data);
  // }
}
