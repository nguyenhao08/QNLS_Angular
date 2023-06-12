import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HomeimgComponent } from './components/homeimg/homeimg.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { NhanvienComponent } from './admin/nhanvien/nhanvien.component';
import { PhongbanComponent } from './admin/phongban/phongban.component';
import { QuanlyluongComponent } from './admin/quanlyluong/quanlyluong.component';
import { AddComponent } from './admin/nhanvien/edit/add/add.component';
import { EditComponent } from './admin/nhanvien/edit/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddpbComponent } from './admin/phongban/edit/addpb/addpb.component';
import { EditpbComponent } from './admin/phongban/edit/editpb/editpb.component';
import { ViewComponent } from './admin/nhanvien/edit/view/view.component';
import { ViewpbComponent } from './admin/phongban/edit/viewpb/viewpb.component';
import { TinhluongComponent } from './admin/quanlyluong/tinhluong/tinhluong/tinhluong.component';
import { FormsModule } from '@angular/forms';
import { EditluongComponent } from './admin/quanlyluong/editluong/editluong/editluong.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    HomeimgComponent,
    NotfoundComponent,
    AdminComponent,
    AdminpageComponent,
    NhanvienComponent,
    PhongbanComponent,
    QuanlyluongComponent,
    AddComponent,
    EditComponent,
    AddpbComponent,
    EditpbComponent,
    ViewComponent,
    ViewpbComponent,
    TinhluongComponent,
    EditluongComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [HomeComponent],
})
export class AppModule {}
