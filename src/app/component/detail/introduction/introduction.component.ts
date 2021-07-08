import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
    selector: 'app-introduction',
    templateUrl: './introduction.component.html',
    styleUrls: ['./introduction.component.less']
})

export class AppIntroduction {
    constructor(
        public http: HttpClient,
    ) {

    }
    public userBaseInfo: any;
    ngOninit() {
        let url = `http://127.0.0.1:8080/login`;//发起请求的url
        this.http.get(url).subscribe((data: any) => {//内置模块的get()方法,当得到数据时返回一个可观察对象触发异步回调函数
            if (data.result) {
                console.log(data);


            } else {
                alert("账户不存在或用户名有误");
            }
        })
    }
}

