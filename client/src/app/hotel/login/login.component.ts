import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public onLogin() : void {
    if (this.username === 'admin' && this.password === 'admin123') {
        console.log('successfully logged in');
        this.router.navigate(['dashboard']);
    } else {
      alert('Wrong credentials');
    }
  }
  constructor(private router: Router) {
    // var vm = this;
    // vm.login = login;
  }

  ngOnInit() {
  }

}
