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
    description: "Мы начинающая компания в сфере анализа экономических показателей банков, но перспективная. Если вы хотите узнат больше инфоормации " +
    "перейдите в раздел."
  };

  create = {
    title: 'Отчетность',
    action: 'Создать',
    description: "Индикатором, который дает возможность понять, как обстоят дела у кредитно-финансовых учреждений, является сравнение их показателей. " +
    "Эти показатели важны не только потенциальным клиентам, но и сотруднрикам, которые хотят отслеживать позиции своего банка относительно конкурентов."

  };

  constructor() { }

  ngOnInit() {
  }

}
