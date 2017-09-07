import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Foo');
  }

  GetNAVStuff(){
    return this.http.get("http://desktop-ahmvit0:7048/DynamicsNAV100/ODataV4/Company('CRONUS%20International%20Ltd.')/SalesOrder")
    //return this.http.get("https://jsonplaceholder.typicode.com/posts")
      .map(res => res.json());
  }

}
