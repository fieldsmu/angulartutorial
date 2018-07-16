import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Tutorial';
  users = [];
  firstname: string;
  lastname: string;
  email: string;
  password: string;

  Add(): void{
    if(this.firstname === null || this.lastname === null || this.email === null || this.password === null){
      return;
    }
    let obj: object = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    }
    this.users.push(obj);
    this.firstname = null;
    this.lastname = null;
    this.email = null;
    this.password = null;
    console.log(this.users);
  }
}
