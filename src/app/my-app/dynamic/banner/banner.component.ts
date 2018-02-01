import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {PlaceHolderDirective} from '../../../common/directives/place-holder.directive';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {
  @ViewChild(PlaceHolderDirective) banner: PlaceHolderDirective;
  private nextBanner = 0;
  constructor( private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

  }
  ngAfterViewInit() {

  }

}
