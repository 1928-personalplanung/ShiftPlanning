import { Component, HostBinding, OnInit } from '@angular/core';

@Component ( {
  selector   : 'sp-detail-drawer',
  templateUrl: './detail-drawer.component.html',
  styleUrls  : ['./detail-drawer.component.scss']
} )
export class DetailDrawerComponent implements OnInit {

  @HostBinding ( 'class.open' ) open = false;

  rate = [1,
          2,
          3
  ];

  data: any = {
    name        : 'Mitarbeiter 1',
    currentHours: 30,
    maxHours    : 40,
    rating      : 3,
    shifts      : [
      'Früh - 02.07.2019',
      'Spät - 02.07.2019',
      'Nacht - 02.07.2019'
    ]
  };

  constructor() {
  }

  ngOnInit(): void {

  }

}
