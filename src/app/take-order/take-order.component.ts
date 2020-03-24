import { Component, OnInit } from '@angular/core';
import '@vaadin/vaadin-select';
import '@vaadin/vaadin-list-box';
import '@vaadin/vaadin-item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.css']
})
export class TakeOrderComponent implements OnInit {
  serverData: JSON;
    employeeData: JSON;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
      this.sayHi()
  }
  sayHi() {
      this.httpClient.get('http://localhost:5002/employees').subscribe(data => {
          this.serverData = data as JSON;
          console.log(this.serverData);
      })
  }

}
