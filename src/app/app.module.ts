import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

import { graphqlUrl } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {
  LoginComponent,
  WrongCredSnackbarComponent
} from './login/login.component';
import { RoomMainComponent } from './sp-room/room-main/room-main.component';
import { RoomDashboardComponent } from './sp-room/room-dashboard/room-dashboard.component';
import { RoomMainHomeComponent } from './sp-room/room-main-home/room-main-home.component';

import { RoomProjectsHomeComponent } from './sp-room/room-projects-home/room-projects-home.component';
import { RoomProjectsListComponent } from './sp-room/room-projects-list/room-projects-list.component';
import { RoomProjectsDetailComponent } from './sp-room/room-projects-detail/room-projects-detail.component';

import { StrapiLoginService } from './services/login/strapi-login.service';
import { JwtTokenService } from './services/login/jwt-token.service';
import { LoadingBarService } from './services/loading/loading-bar.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,

    BrowserAnimationsModule,

    FlexLayoutModule,

    AppMaterialModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    WrongCredSnackbarComponent,
    RoomMainComponent,
    RoomDashboardComponent,
    RoomMainHomeComponent,

    RoomProjectsHomeComponent,
    RoomProjectsListComponent,
    RoomProjectsDetailComponent,
  ],
  bootstrap: [AppComponent],

  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: graphqlUrl
          })
        };
      },
      deps: [HttpLink]
    },

    StrapiLoginService,
    JwtTokenService,
    LoadingBarService
  ],

  entryComponents: [WrongCredSnackbarComponent]
})
export class AppModule {}
