import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { RoomMainComponent } from '../sp-room/room-main/room-main.component';
import { RoomDashboardComponent } from '../sp-room/room-dashboard/room-dashboard.component';
import { RoomMainHomeComponent } from '../sp-room/room-main-home/room-main-home.component';

import { RoomProjectsHomeComponent } from '../sp-room/room-projects-home/room-projects-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'u/:username', redirectTo: 'u/:username/home', pathMatch: 'full' },
  { path: 'u/:username/projects', redirectTo: 'u/:username/projects/home', pathMatch: 'full' },
  {
    path: 'u/:username',
    component: RoomMainComponent,
    children: [
      { path: 'home', component: RoomMainHomeComponent },
      { path: 'dashboard', component: RoomDashboardComponent },

      { path: 'projects/home', component: RoomProjectsHomeComponent },
      { path: 'projects/:project', component: RoomProjectsHomeComponent },
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
