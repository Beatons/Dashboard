import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { routerTransition } from '../../app.animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition.rightSlide],
  host: {
      '[@routerTransition]': ''
  }
})
export class DashboardComponent implements OnInit {
  teams:{name:string,id:number}[] = [];
  selectedTeams:{name:string,id:number}[] = [];
  constructor(
        private http: Http
  ) { }

  ngOnInit() {
    const sub = this.http.get('../../mock/teams.json').subscribe((teams) => {
      this.teams = teams.json();
      sub.unsubscribe();
    })
  }

}