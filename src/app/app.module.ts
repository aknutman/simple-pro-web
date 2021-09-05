import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

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
import { LoginComponent } from './login/login.component';

import { StrapiLoginService } from './services/login/strapi-login.service';

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

    AppMaterialModule,
  ],
  declarations: [AppComponent, TopBarComponent, LoginComponent],
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

    StrapiLoginService
  ]
})
export class AppModule {}
