import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { routerTransition } from '../../app.animations';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [routerTransition.rightSlide],
  host: {
      '[@routerTransition]': ''
  }
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'phone','role'];
  dataSource = new MatTableDataSource<any>([]);
  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    const sub = this.http.get('./../../mock/users.json').pipe(map(response=> response.json())).subscribe((sets) => {
      this.dataSource.data = sets; 
      sub.unsubscribe();
    });
  }
  onSubmit(form:NgForm) {
    console.log(form.value);
  }

}