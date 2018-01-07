import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsedFlag: boolean = true;
  name: string = 'test';
  currentUrl = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.currentUrl = this.router.url;
  }


  checkUrl() {
    this.currentUrl = this.router.url;
  }




}
