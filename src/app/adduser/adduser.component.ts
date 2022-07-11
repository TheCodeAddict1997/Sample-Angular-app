import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DisplayComponent } from '../display/display.component';
// import { users } from 'src/data';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  public userForm: FormGroup;
  public users = [];
  @ViewChild(DisplayComponent, { static: false }) displayComponent: DisplayComponent;
  constructor() { }

  ngOnInit() {
      this.userForm = new FormGroup({
        username: new FormControl(),
        age: new FormControl()
      })
  }

  // Just viewing how viewCild works
  ngAfterViewInit() {
    console.log(this.displayComponent.staticData," static data");
  }
  ngOnChanges() {
    console.log("calling")
  }

  submitForm () {
    if (this.userForm.value.username && this.userForm.value.age) {
      const userFound: boolean = this.users.find((element) => {
        return element.name == this.userForm.value.username && element.age == this.userForm.value.age;
      });
      if(!userFound) {
        this.users.push({name: this.userForm.value.username, age: this.userForm.value.age});
        this.userForm.reset();
      }else{
        alert("Duplicate user");
      }
    } else {
      alert("Please enter all the values");
    }
  }

  updateUser(users) {
    this.users = users;
  }
}
