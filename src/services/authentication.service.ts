import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TokenDTO } from '../models/token.dto';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    client_id: string = "Rb6yDNb6muY6Wr9iGybl193VzO6BqOuleLGblg14"
    client_secret: string = "NjsLaIedGub9LC2xAKHIt7kiN4DiSBLolT74w2PYrOu4PPdRxCNqgZDLS1UlqwSQry2HSmRj21MWcOiKOuLq8UtsD0LBic26SxJAEHqf7AaZ5C6sOSG9WrHf3gOzJkmY";
    grant_type: string = "password";
    apiURL: string = 'https://delineaapi.herokuapp.com/';
    private currentTokenSubject: BehaviorSubject<TokenDTO>;
    public currentToken: Observable<TokenDTO>;

    constructor(private http: HttpClient) {
        this.currentTokenSubject = new BehaviorSubject<TokenDTO>(JSON.parse(localStorage.getItem('currentToken')));
        this.currentToken = this.currentTokenSubject.asObservable();
    }

    public get currentTokenValue(): TokenDTO {
        return this.currentTokenSubject.value;
    }

    login(username, password): Observable<any> {
        const body = new HttpParams()
          .set('username', username)
          .set('password', password)
          .set('client_id', this.client_id)
          .set('client_secret', this.client_secret)
          .set('grant_type', this.grant_type);
      
        return this.http.post<any>(`${this.apiURL}/o/token/`, 
            body.toString(),
            {
                headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
            }).pipe(map(user => {
                if (user && user.access_token) {
                    localStorage.setItem('currentToken', JSON.stringify(user));
                    this.currentTokenSubject.next(user);
                }

                return user;
            }));
      }

    logout() {
        localStorage.removeItem('currentToken');
        this.currentTokenSubject.next(null);
    }
}