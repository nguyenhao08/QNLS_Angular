import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NhanvienService } from 'src/app/services/nhanvien.service';

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css'],
})
export class NhanvienComponent implements OnInit {
  nhanviens: any;
  constructor(private nhanvien: NhanvienService, private router: Router) {}

  getAll() {
    this.nhanvien.getList().subscribe((res) => {
      this.nhanviens = res;
      console.log(this.nhanviens);
    });
  }

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
