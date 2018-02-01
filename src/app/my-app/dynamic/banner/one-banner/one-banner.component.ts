import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-one-banner',
  templateUrl: './one-banner.component.html',
  styleUrls: ['./one-banner.component.css']
})
export class OneBannerComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
