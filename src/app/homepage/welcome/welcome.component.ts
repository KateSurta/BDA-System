import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }
  ]
})

export class WelcomeComponent implements OnInit {
  about = {
    title: 'О нас',
    action: 'Информация',
    description: 'Здесь вы найдете описание системы. Наслаждайтесь!'
  };

  create = {
    title: 'Создать отчет',
    action: 'Создать',
    description: 'Eсли вы хотите создать отчет по банкам. Жмите!'
  };

  constructor() { }

  ngOnInit() {
  }

}
