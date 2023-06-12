import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';
import { NhanvienService } from 'src/app/services/nhanvien.service';
@Component({
  selector: 'app-tinhluong',
  templateUrl: './tinhluong.component.html',
  styleUrls: ['./tinhluong.component.css'],
})
export class TinhluongComponent implements OnInit {
  public tongluong: number = 0;
  submited: boolean = false;
  nhanviens: any;
  form: any;
  alertService: any;

  add(val1: string, val2: string, val4: string) {
    this.tongluong = parseInt(val1) * parseInt(val4) + parseInt(val2) || 0;
  }

  addForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    birthday: ['', Validators.required],
    gender: ['', Validators.required],
    chucvu: ['', Validators.required],
    phongban: ['', Validators.required],
    chuyennganh: ['', Validators.required],
    hocvan: ['', Validators.required],
    luong: ['', Validators.required],
    tongluong: ['', Validators.required],
  });

  constructor(
    private nhanvien: NhanvienService,
    private router: Router,
    private fb: FormBuilder,
    private _router: ActivatedRoute
  ) {}

  getAll() {
    this._router.paramMap.subscribe((query) => {
      let id = query.get('id');
      this.nhanvien.getById(id).subscribe((res) => {
        let view = res;
        this.addForm = this.fb.group({
          id: [view.id, Validators.required],
          name: [view.name, Validators.required],
          birthday: [view.birthday, Validators.required],
          chucvu: [view.chucvu, Validators.required],
          phongban: [view.phongban, Validators.required],
          chuyennganh: [view.chuyennganh, Validators.required],
          hocvan: [view.hocvan],
          gender: [view.gender, Validators.required],
          luong: [view.luong, Validators.required],
          tongluong: [view.tongluong, Validators.required],
        });
      });
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  onSsubmit() {
    console.log(this.addForm.value);
    this.nhanvien.add(this.addForm.value).subscribe((res) => {
      this.getAll();
    });
  }

  get f() {
    return this.addForm.controls;
  }
  onsubmit(): any {
    this.submited = true;
    if (this.addForm.invalid) {
      return false;
    }

    console.log(this.addForm.value);
    this.nhanvien.add(this.addForm.value).subscribe((res) => {
      this.router.navigate(['nhan-vien']);
    });
  }
  private update() {
    this.nhanvien
      .update(this.addForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('User updated', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['../../'], { relativeTo: this._router });
        },
      });
  }
  onSubmit() {
    this.update();
  }
}
