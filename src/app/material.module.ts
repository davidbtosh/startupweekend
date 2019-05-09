import {MatButtonModule, 
  MatToolbarModule, 
  MatCardModule, 
  MatIconModule, 
  MatSidenavModule,
  MatTabsModule,
  MatListModule} from '@angular/material';
  
import { NgModule } from '@angular/core';

const matModules = [
  MatButtonModule, 
  MatToolbarModule, 
  MatCardModule, 
  MatSidenavModule,
  MatIconModule,
  MatTabsModule,
  MatListModule
];

@NgModule({
  imports: matModules,
  exports: matModules,
})
export class MaterialModule { }