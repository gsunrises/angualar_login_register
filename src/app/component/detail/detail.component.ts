import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'nz-demo-layout-custom-trigger',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.less'],
    encapsulation: ViewEncapsulation.None,
})
export class DetailComponent {
    constructor(
        private router: Router,
    ) {

    }
    isCollapsed = false;
    ngOnInIt() {
        this.router.navigateByUrl('/detail');
    }
}