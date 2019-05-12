import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ScanQrCodeComponent } from './components/scan-qr-code/scan-qr-code.component';
import { NearbyCafesComponent } from './components/nearby-cafes/nearby-cafes.component';
import { PreferencesComponent } from './components/preferences/preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    ScanQrCodeComponent,
    NearbyCafesComponent,
    PreferencesComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
