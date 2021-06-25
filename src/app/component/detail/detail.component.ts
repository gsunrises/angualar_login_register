import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
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
    text: string = 'XU';
    color: string = colorList[3];
    ngOnInIt() {
        this.router.navigateByUrl('/detail');

    }

    changeBgColor() {
        let idx = Math.ceil((Math.random() * 3)) + 1;
        console.log(idx)
        this.color = colorList[idx];
    }
}