import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {


  constructor() {
  }

  login(email, pwd){
    if(email == "test@ynov.com" && pwd == "test")
    {
      localStorage.setItem('currentUser', JSON.stringify({ email: email }));
      return true;
    }else{
      return false;
    }
  }

  isLoggedIn(){
    if (localStorage.getItem('currentUser')) {
        // logged in so return true
        return true;
    }
    return false;
  }

  logout(): void {
      localStorage.removeItem('currentUser');
  }

}
