import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  collapsedFlag = true;
  public email: string;
  public password: string;

  toggleState(value) {
    let bool = this.collapsedFlag;
    this.collapsedFlag = value ? value : !bool;
  }

  ngOnInit() {
  }
}
