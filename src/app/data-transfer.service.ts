import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from './models/User';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

 private state = new BehaviorSubject<User>({login: '', password: ''});

  constructor() { }

  createUserInDataTransfer(value): void {
    this.state.next(value);
  }

  getUserWithDataTransfer(): User {
    return  this.state.getValue();
  }
}
