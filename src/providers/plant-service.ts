import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlantService {

  private url: string = 'http://localhost:3001';

  constructor(private http: Http) {
    console.log('Hello PlantService Provider');
  }

  getPlants() {
    return this.http.get(`${this.url}/plants`)
      .do(this.logResponse)
      .map(this.extractData)
      .catch(this.catchError);
  }

  private catchError(error: Response | any) {
    console.log(error);
    return Observable.throw(error.json().error  || "Server error.");
  }
  private logResponse(res: Response) {
    console.log(res);
  }

  private extractData(res: Response) {
    return res.json();
  }

}
