import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AddpbComponent } from './admin/phongban/edit/addpb/addpb.component';
import { EditpbComponent } from './admin/phongban/edit/editpb/editpb.component';
import { ViewComponent } from './admin/nhanvien/edit/view/view.component';
import { ViewpbComponent } from './admin/phongban/edit/viewpb/viewpb.component';
import { TinhluongComponent } from './admin/quanlyluong/tinhluong/tinhluong/tinhluong.component';
import { EditluongComponent } from './admin/quanlyluong/editluong/editluong/editluong.component';

const routes: Routes = [
  { path: '', component: HomeimgComponent },
  { path: 'dang-nhap', component: LoginComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'adminpage', component: AdminpageComponent },
  { path: 'nhan-vien', component: NhanvienComponent },
  { path: 'phong-ban', component: PhongbanComponent },
  { path: 'luong', component: QuanlyluongComponent },
  { path: 'nhan-vien/add', component: AddComponent },
  { path: 'nhan-vien/edit/:id', component: EditComponent },
  { path: 'nhan-vien/view/:id', component: ViewComponent },
  { path: 'phong-ban/add', component: AddpbComponent },
  { path: 'phong-ban/edit', component: EditpbComponent },
  { path: 'phong-ban/view', component: ViewpbComponent },
  { path: 'luong/tinh-luong/:id', component: TinhluongComponent },
  { path: 'luong/edit-luong/:id', component: EditluongComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
