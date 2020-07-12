import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BankAccount } from '../models/bankaccount';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {}
  private balance: number;

  getAccount(id: number): Observable<BankAccount> {
    //TODO: fill this out with local copy/event response to pull data again later
    const endpoint = `api/accounts/${id}`;
    return this.http.get(endpoint) as Observable<BankAccount>;
  }

  updateAccount(id: number, data: any): Observable<any> {
    const endpoint = `api/accounts/${id}`;
    return this.http.patch(endpoint, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
