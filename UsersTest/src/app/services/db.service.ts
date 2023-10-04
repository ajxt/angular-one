import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';
import { userList } from '../user-list';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  public getUsers(): Observable<User[]>{
    return of(userList);
  }
}
