import { Component } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [AppService]
})
export class AppComponent {
  title = 'first-app';
  public formData = {
    username: "",
    password: ""
  }
  constructor(public http: HttpClient) {

  }





  loginRequest() {
    //通过get请求将用户名和密码提交给后端进行验证      

    let url = `http://127.0.0.1:8080/login?name=${this.formData.username}&password=${this.formData.password}`;//发起请求的url
    this.http.get(url).subscribe((data: any) => {//内置模块的get()方法,当得到数据时返回一个可观察对象触发异步回调函数
      if (data.result) {
        console.log(data);
        // window.open("main-interface", "_self");//跳转到另一个页面，即登陆成功的页面
      } else {
        alert("账户不存在或用户名有误");
      }
    })
  };



  registerRequest() {
    var url = "http://127.0.0.1:8080/register";
    var body = {
      username: this.formData.username,
      password: this.formData.password
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
