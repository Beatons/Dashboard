import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../../app.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routesDashboard } from './dashboard.routes';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ChartsModule } from '../../components/charts/charts.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild(routesDashboard),
    AppMaterialModule,
    FlexLayoutModule,
    AppMaterialModule,
    HttpModule,
    ChartsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule { }
