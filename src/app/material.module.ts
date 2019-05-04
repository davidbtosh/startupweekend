import {MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, 
  MatSidenavModule} from '@angular/material';
import { NgModule } from '@angular/core';

const matModules = [
  MatButtonModule, 
  MatToolbarModule, 
  MatCardModule, 
  MatSidenavModule,
  MatIconModule
];

@NgModule({
  imports: matModules,
  exports: matModules,
})
export class MaterialModule { }