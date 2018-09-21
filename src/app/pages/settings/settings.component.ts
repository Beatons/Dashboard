import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs';
import { routerTransition } from '../../app.animations';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [routerTransition.rightSlide],
  host: {
      '[@routerTransition]': ''
  }
})
export class SettingsComponent implements OnInit {

  settings:any;
  constructor(
        private http: Http

  ) { }

  ngOnInit() {
    const sub = this.http.get('./../../mock/settings.json').subscribe((sets) => {
      this.settings = sets.json(); 
      sub.unsubscribe();
    });
  }

}