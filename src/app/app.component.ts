import { Component, OnInit } from '@angular/core';
import {DataService} from './services/DataService';
// import * as json from '../assets/data/userData.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allPersons = [
    {name: 'Mahesh', age: '25'},
    {name: 'Shakti', age: '23'},
    {name: 'Krishna', age: '23'},
    {name: 'Radha', age: '21'},
  ];
  title = 'app';
  imgUrls: any = {};
  htmls = `<p>asgasg</p>`
constructor( private dataService: DataService) {}
  ngOnInit() {
    //console.log('JSON', json);
    console.log(this.htmls);
    const domParser = new DOMParser();
    const ele = domParser.parseFromString(this.htmls, 'text/html');
    const styleEle = ele.querySelectorAll('#home div[style*=".jpg"]');
    console.log(ele);
    console.log(styleEle);
    const urls = this.getImageUrl(styleEle);
    this.getData();

  }

  private getData(){
    // this.dataService.getMyData().subscribe((data) => {
    //   let groupData = this.dataService.gruopBy(data.data,2602178);
    //   let obj = this.dataService.mapData(groupData);
    //   console.log(obj);
    // })
    // this.dataService.getUserData().subscribe(( data) => {
    //   console.log(data);
    // });
  }

  public getImageUrl( ele: any ): {url: string}[]{
    const arr: {url: string}[] = [];
    const eleArr: Element[] = [];
    [].push.apply(eleArr, ele);
    eleArr.forEach(( eleObj: any, ind ) => {
      if (eleObj.style.backgroundImage){
        eleObj.setAttribute('offset', 'offset');
        let firstInd = eleObj.style.backgroundImage.indexOf('"');
        let secondInd = eleObj.style.backgroundImage.lastIndexOf('"');
        const url: string = eleObj.style.backgroundImage.slice(firstInd + 1, secondInd);
        this.imgUrls['url' + ind] = url;
        eleObj.setAttribute('lazyLoad', '{{imgUrls.url' + ind + '}');
        arr.push({
          url: url
        });
      }else {
        let url:string = eleObj.attributes['style'].nodeValue;
        let find = url.indexOf('/');
        let lind = url.lastIndexOf('.jpg');
        let urlStr = url.slice(find, lind+4);
        this.imgUrls['url' + ind] = urlStr;
      }
    });
    return arr;
  }
}
