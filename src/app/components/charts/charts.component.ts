
import { Component, OnInit, OnDestroy, Input, SimpleChanges } from '@angular/core';
// import { VoteService } from './vote.service';
// import {NgxChartsModule} from '@swimlane/ngx-charts';
// import { Http } from '@angular/http';

@Component({
  selector: 'cx-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnDestroy {
  
  survey = {
    country: '',
    gender: '',
    rating: 0
  }
  timer:any;
  @Input() lines:string[] = [];
  chartdata: boolean = false;
  data:any[] = [];
  //Chart
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    // private http:Http
    //   private vote: VoteService
      ) {}

  saveEntry() {
    // this.vote.saveEntry(this.survey);
  }

  ngOnInit() {
    this.chartdata = true;
    this.processData();
    // this.vote.getAllEntries().subscribe((results) => {
    //   this.chartdata = true;
    //   this.processData(results);
    // })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.timer);
  }
  onSelect(event) {
    console.log(event);
  }
ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  if(changes['lines']) {
    this.lines.map((team,i) => {
      this.data[i] = {name:team['name'],series: []}
    }); 
  }
}

  processData() {
    let time = 0;
    this.timer = setInterval(() => {
      time++;
      this.lines.map((team,i) => {

        this.data[i].series.push({ name:`${time}`,value:Math.floor(Math.random() * 100)});
       if(this.data[i].series.length >= 20) this.data[i].series.shift();  
      });
      this.data = [...this.data];  
    },1000);
  }

}