import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login-clear',
  templateUrl: './login-clear.page.html',
  styleUrls: ['./login-clear.page.scss'],
})
export class LoginClearPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['home'])
    }, 2300)
  }


}
