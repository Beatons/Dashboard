import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  declarations: [AppComponent],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
