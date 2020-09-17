


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-wg-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent {
    constructor(
        public http: HttpClient,
        private fb: FormBuilder
    ) {

    }
    validateForm!: FormGroup;
    submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }

        console.log(this.validateForm.value);
        let { userName, password, remember } = this.validateForm.value;
        let url = `http://127.0.0.1:8080/login?name=${userName}&password=${password}`;//发起请求的url
        this.http.get(url).subscribe((data: any) => {//内置模块的get()方法,当得到数据时返回一个可观察对象触发异步回调函数
            if (data.result) {
                console.log(data);
                // window.open("main-interface", "_self");//跳转到另一个页面，即登陆成功的页面
            } else {
                alert("账户不存在或用户名有误");
            }
        })
    }



    ngOnInit(): void {
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
        });
    }
}