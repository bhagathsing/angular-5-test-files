import { Injectable } from '@angular/core';
import {BannerType} from './banner-type';
import {OneBannerComponent} from './one-banner/one-banner.component';
import {TwoBannerComponent} from './two-banner/two-banner.component';

@Injectable()
export class BannerService {

  constructor() { }
  getBanners() {
    return[
      new BannerType(OneBannerComponent, {title: 'Bhagath Singh', body: 'Senior UI Developer'}),
      new BannerType(TwoBannerComponent, {title: 'Naveen', body: 'UI Developer'}),
      new BannerType(TwoBannerComponent, {title: 'Shaik', body: 'UI Developer....'})
    ];
  }

}
