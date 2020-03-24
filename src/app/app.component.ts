import { Component } from '@angular/core';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-select';
import '@vaadin/vaadin-list-box';
import '@vaadin/vaadin-item';
import '@vaadin/vaadin-ordered-layout';
import '@vaadin/vaadin-grid';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MyDinner';

  people: Person[] = [];

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  addPerson() {
    this.people = [
      ...this.people,
      new Person(this.form.value.firstName, this.form.value.lastName)
    ];
    this.form.reset();
  }
}
class Person {
  constructor(public firstName: string, public lastName: string) {}
}
