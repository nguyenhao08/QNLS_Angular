import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhongbanService } from 'src/app/services/phongban.service';

@Component({
  selector: 'app-phongban',
  templateUrl: './phongban.component.html',
  styleUrls: ['./phongban.component.css'],
})
export class PhongbanComponent implements OnInit {
  phongbans: any;
  constructor(private phongban: PhongbanService, private router: Router) {}

  getAll() {
    this.phongban.getList().subscribe((res) => {
      this.phongbans = res;
      console.log(this.phongbans);
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  onEdit(id: number) {
    alert('Click on button' + id);
  }

  onDelete(id: number) {
    this.phongban.delete(id).subscribe((res) => {
      this.getAll();
    });
  }

  public addnhanvien() {
    this.router.navigate(['/nhan-vien/add']);
  }
}
