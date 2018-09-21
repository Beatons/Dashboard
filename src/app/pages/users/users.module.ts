import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../../app.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routesUsers } from './users.routes';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild(routesUsers),
    AppMaterialModule,
    FlexLayoutModule,
    AppMaterialModule,
    MatTableModule,
    HttpModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    UsersComponent
  ],
})
export class UsersModule { }
