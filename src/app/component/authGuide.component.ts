import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanLoad,
  CanDeactivate
} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { NewsComponent } from '../component/news/news.component';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<any> {
  constructor(
    private router: Router
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // 权限控制逻辑如 是否登录/拥有访问权限
    console.log('canActivate');
    return true;
  }
  canDeactivate(
    component: NewsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot) {
    console.log('canDeactivate');
    return true;
  }
  canActivateChild() {
    // 返回false则导航将失败/取消
    // 也可以写入具体的业务逻辑
    console.log('canActivateChild');
    return true;
  }
  canLoad(route: Route) {
    // 是否可以加载路由
    console.log('canload');
    return true;
  }
}
