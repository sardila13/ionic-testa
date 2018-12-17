import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

public alldata:any=[];

  constructor() {
        this.alldata = [{
            id: 0,
            name: 'Ray Sparrow',
            lastText: 'You on your way?',
            face: 'assets/img/glasses.jpg',
            price:'420',
            discout:'30%'
          }, {
            id: 1,
            name: 'Max Lynx 420',
            lastText: 'Hey, it\'s me',
            face: 'assets/img/cam.jpg',
            price:'400',
            discout:'10%'
          }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'assets/img/guitar.jpg',
            price:'320',
            discout:'20%'
          }, {
            id: 3,
            name: 'Titne Governor',
            lastText: 'Look at my mukluks!',
            face: 'assets/img/glasses.jpg',
            price:'350',
            discout:'15%'
          }, {
            id: 4,
            name: 'Mike Harrington 320',
            lastText: 'This is wicked good ice cream.',
            face: 'assets/img/cam.jpg',
            price:'260',
            discout:'25%'
          }];

  }
  getall(){
    return this.alldata;
  }

}
