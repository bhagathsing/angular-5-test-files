import { Component, OnInit } from '@angular/core';
import {MenusData} from '../common/pages/nav/nav.interface';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements OnInit {
  menuData: MenusData[] = [
    {name: 'Dashboard', url: './', id: 1 },
    {name: 'Dynamic Component', url: './dynamic-component', id: 2, children: [
        {name: 'Banner Load', url: './dynamic-component', id: 1 },
        {name: 'Tabs', url: './dynamic-component/tabs', id: 1 },
        {name: 'Test Modal', url: './dynamic-component/test-modal', id: 1 },
     ]},
    {name: 'Directives', url: './directives', id: 3},
    {name: 'Grid', url: './grid', id: 4},
    {name: 'Filters', url: './filters', id: 5}
  ];
  constructor() { }

  ngOnInit() {
  }

}
