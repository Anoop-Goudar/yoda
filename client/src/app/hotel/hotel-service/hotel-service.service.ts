import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HotelService {

  constructor (private http: Http) {}
  callService() {
    console.log('service called');
  }
  getOpenRequests (): Observable<any> {
    return this.http.post('http://node-intelliserver.herokuapp.com/api/sheraton/open_requests', {})
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getClosedRequests (): Observable<any> {
    return this.http.post('http://node-intelliserver.herokuapp.com/api/sheraton/closed_requests', {})
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getAssignedRequests (): Observable<any> {
    return this.http.post('http://node-intelliserver.herokuapp.com/api/sheraton/assigned_requests', {})
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.open_requests || body.closed_requests || body.assigned_requests || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
