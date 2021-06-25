import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { LoginComponent, RegisterComponent, UserComponent, DetailComponent } from './component';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
registerLocaleData(zh);
const componentList = [AppComponent, LoginComponent, RegisterComponent, UserComponent, DetailComponent];
@NgModule({
  imports: [
    DemoNgZorroAntdModule,
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
   
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...componentList,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})

export class AppModule { }
