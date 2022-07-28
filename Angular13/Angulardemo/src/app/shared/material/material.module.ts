import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';

const materialComponents = [MatSliderModule,MatToolbarModule,MatSidenavModule,MatButtonModule,MatListModule,MatIconModule,LayoutModule]
@NgModule({
  declarations: [],
  imports: [
    materialComponents
  ],
  exports:[materialComponents]
})
export class MaterialModule { }
