import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly userSubject = new BehaviorSubject<UserModel>(new UserModel(1, true));
  
  getUser(): UserModel {
    return this.userSubject.getValue();
  }

  private setUser(value: UserModel): void {
    this.userSubject.next(value);
  }

  public enable2FA(value: boolean) {
    const newUser: UserModel = this.userSubject.getValue();
    newUser.is2FAEnabled = value;
    this.setUser(newUser);
  }

  constructor() { }
}
