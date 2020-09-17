


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-wg-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
export class RegisterComponent {
    constructor(
        public http: HttpClient,
        private fb: FormBuilder
    ) {

    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
        });
    }


    validateForm!: FormGroup;
    submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }

        console.log(this.validateForm.value);
        let { userName, password, confirmPassword } = this.validateForm.value;
        this.registerRequest();
    }

    registerRequest() {
        var url = "http://127.0.0.1:8080/register";
        var body = {
          username: this.validateForm.value.userName,
          password: this.validateForm.value.password
        }
        var options = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        this.http.post(url, body, options).subscribe((data: any) => {
          switch (data.result) {
            case -1: {
              alert("服务器出错，请稍后再试");
              break;
            }
            case 0: {//用户名已被使用
              alert("用户名已被使用，请更换！")
              break;
            }
            case 1: {//注册成功
              alert('注册成功');
              // this.checkCookieService.setCookie("username", username, 7);//有效期为一个星期
              // this.checkCookieService.setCookie("password", password, 7);//存储密码
              // window.open("main-interface", "_self");
            }
          }
        })
      }

    
}
