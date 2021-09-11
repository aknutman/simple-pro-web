import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { RoomMainComponent } from '../sp-room/room-main/room-main.component';
import { RoomDashboardComponent } from '../sp-room/room-dashboard/room-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'u/:username', component: RoomMainComponent },
  {
    path: 'u/:username',
    component: RoomMainComponent,
    children: [{ path: 'dashboard', component: RoomDashboardComponent }]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
