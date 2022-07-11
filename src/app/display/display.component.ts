import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public staticData = [1,2];
  @Input() users;
  @Output() updateUsers: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removeUser(data) {
    this.users = this.users.filter((user) => user != data);
    this.updateUsers.emit(this.users);
  }

  ngOnChanges() {
    console.log("calling")
  }
  
}
