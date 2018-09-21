import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ChartsComponent } from "./charts.component";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatFormFieldModule, MatSelectModule, MatRadioModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ChartsComponent
    ],
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        CommonModule,
        FormsModule,
        NgxChartsModule
    ],
    exports:[
        ChartsComponent
    ]
   })
  export class ChartsModule {
  }