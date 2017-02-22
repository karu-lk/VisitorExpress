import { Injectable } from '@angular/core';
import { RequestOptions, Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Visitor } from '../visitor/visitor.model';

@Injectable()
export class VisitorService {
    private baseUrl: string = 'http://karu.com:5000/api';
    constructor(private http: Http) {
    }

    getAll(): Observable<Visitor[]> {
        let people$ = this.http
            .get(`${this.baseUrl}/Visitor`, { headers: this.getHeaders() })
            .map(mapPersons)
            .share()
            .catch(handleError);
        return people$;
    }

    addNew(visitor: Visitor): Observable<Visitor> {
        let options = new RequestOptions({ headers: this.getHeaders() });
        let body = visitor;
        return this.http
            .post(`${this.baseUrl}/Visitor`, body, this.getHeaders())
            .share()
            .map((res: Response) => res.json())
            .catch(handleError);
    }

    update(visitor) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(visitor);
        return this.http
            .put(`${this.baseUrl}/Visitor/` + visitor.visitorId, body, headers)
            .share()
            .map((res: Response) => res.json());
    }

    delete(visitorId) {
        return this.http
            .delete(`${this.baseUrl}/Visitor/` + visitorId)
            .share();
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}

function mapPersons(response: Response): Visitor[] {
    return response.json().map(toVisitor);
}

function toVisitor(r: any): Visitor {
    let person = <Visitor>({
        fullName: r.fullName,
        company: r.company,
        host: r.host
    });
    console.log('Parsed person:', person);
    return person;
}

function handleError(error: any) {
    // log error, could be something more sofisticated
    let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`;
    console.error(errorMsg);

    // throw an application level error
    return Observable.throw(errorMsg);
}
