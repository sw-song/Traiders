import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-clear',
  templateUrl: './register-clear.page.html',
  styleUrls: ['./register-clear.page.scss'],
})
export class RegisterClearPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 2300)
  }
}
