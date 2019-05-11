import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScanQrCodeComponent } from './components/scan-qr-code/scan-qr-code.component';
import { NearbyCafesComponent } from './components/nearby-cafes/nearby-cafes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'scan-qr-code', component: ScanQrCodeComponent },
  { path: 'nearby-cafes', component: NearbyCafesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
