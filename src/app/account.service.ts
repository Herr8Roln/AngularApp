import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = 'http://localhost:8080/api/accounts'; // Base URL for the API

  constructor(private httpClient: HttpClient) {}

  // Fetch all accounts
  getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.baseUrl);
  }

  // Create a new account
  createAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(`${this.baseUrl}/register`, account);

  }
}
