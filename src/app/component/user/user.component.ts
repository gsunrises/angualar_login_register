import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UserComponent {
  constructor(
    private router: Router,
  ) {

  }
  ngOnInit() {
    this.router.navigateByUrl('/login');
  }

}