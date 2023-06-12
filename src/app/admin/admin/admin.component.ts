import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NhanvienService } from 'src/app/services/nhanvien.service';
import { PhongbanService } from 'src/app/services/phongban.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  nhanviens: any;
  phongbans: any;
  constructor(
    private nhanvien: NhanvienService,
    private router: Router,
    private phongban: PhongbanService
  ) {}
  total: number = 2000;

  getAll() {
    this.nhanvien.getList().subscribe((res) => {
      this.nhanviens = res;
      console.log(this.nhanviens);
    });
    this.phongban.getList().subscribe((res) => {
      this.phongbans = res;
      console.log(this.phongbans);
    });
  }
  taltal() {}
  ngOnInit(): void {
    this.getAll();
  }

  onEdit(id: number) {
    alert('Click on button' + id);
  }

  onDelete(id: number): any {
    if (confirm('Are you sure you want to delete?')) {
      this.nhanvien.delete(id).subscribe((res) => {
        this.getAll();
      });
    }
  }

  public addnhanvien() {
    this.router.navigate(['/nhan-vien/add']);
  }
}
