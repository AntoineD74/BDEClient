import { Component } from '@angular/core';

import { Message } from 'primeng/primeng';

import { AuthService } from './auth.service';

import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  msgs: Message[] = [];


  constructor(
    public dialog: MdDialog,
    private auth: AuthService
  ) {}

  isLoggedIn(){
    return this.auth.isLoggedIn();
  }

  logout(){
    this.auth.logout();
    this.msgs.push({severity:'info', summary:'Vous êtes déconnecté'});
  }

  openDialog() {
      let dialogRef = this.dialog.open(AuthDialog);
      dialogRef.afterClosed().subscribe(result => {
        if(result.success)
          this.msgs.push({severity:'success', summary:'Vous êtes connecté'});
      });
    }
}

@Component({
  moduleId: module.id,
  selector: 'auth-dialog',
  templateUrl: 'auth-dialog.html',
})
export class AuthDialog {
  constructor(
    public dialogRef: MdDialogRef<AuthDialog>,
    private auth: AuthService
  ) {}

  email: string = '';
  pwd: string = '';

  login(){
    let that = this;
    if(this.auth.login(this.email, this.pwd)){
      console.log("Logged");
      that.dialogRef.close({"success":"true"});
    }
  }
}
