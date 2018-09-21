import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../../app.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routesSettings } from './settings.routes';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesSettings),
    AppMaterialModule,
    FlexLayoutModule,
    AppMaterialModule,
    HttpModule
  ],
  declarations: [
    SettingsComponent
  ],
})
export class SettingsModule { }
