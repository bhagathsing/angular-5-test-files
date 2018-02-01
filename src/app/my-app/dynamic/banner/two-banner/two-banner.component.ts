import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-two-banner',
  templateUrl: './two-banner.component.html',
  styleUrls: ['./two-banner.component.css']
})
export class TwoBannerComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
