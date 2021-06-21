import { Component, OnInit } from '@angular/core';
import { IHome } from '../../../models/views/home/IHome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  declarations!: IHome;
  constructor() {
    this.declarations = {
      navbar: {
        class: 'string',
        items: [
          {
            label: 'string',
            icon: 'string',
            showIcon: false,
            showLabel: false,
            href: 'string'
          }
        ],
        brand: {
          label:      'string',
          icon:       'string',
          image:      'string',
          showLabel:  false,
          showIcon:   false,
          showImage:  false
        }

      }
    }

  }

  ngOnInit(): void {
  }

}
