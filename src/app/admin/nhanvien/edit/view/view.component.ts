import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NhanvienService } from 'src/app/services/nhanvien.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  

  submited: boolean = false;
  nhanviens:any;
  addForm = this.fb.group({
    id: ['',Validators.required],
    name: ['',Validators.required],
    birthday: ['',Validators.required],
    gender: ['',Validators.required],
    chucvu: ['',Validators.required],
    phongban: ['',Validators.required],
    chuyennganh: ['',Validators.required],
    hocvan: ['',Validators.required],
  })

   constructor(
     private nhanvien:NhanvienService,
     private router: Router  ,
     private fb : FormBuilder ,
     private _router : ActivatedRoute       
     ){}
 
     getAll(){
      this._router.paramMap.subscribe(query => {
        let id = query.get("id");
        this.nhanvien.getById(id).subscribe(res => {
          let view = res
          this.addForm = this.fb.group({
            id: [view.id,Validators.required],
            name: [view.name,Validators.required],
            birthday: [view.birthday,Validators.required],
           // gender: [view.gender,Validators.required],
            chucvu: [view.chucvu,Validators.required],
            phongban: [view.phongban,Validators.required],
            chuyennganh: [view.chuyennganh,Validators.required],
            hocvan: [view.hocvan ],
            gender: [view.gender, Validators.required ],
          })
  
          
        });
        
          });
  
    }
   
   ngOnInit(): void {

      this.getAll();
     } 

     onsubmit(){
      console.log(this.addForm.value);
      this.nhanvien.update(this.addForm.value).subscribe(res => {
        this.getAll();
      })
    }   
   
    
   get f() {return this.addForm.controls;}
    onSubmit() : any {
      this.submited = true;
      if (this.addForm.invalid) {return false;}

        console.log(this.addForm.value)
      this.nhanvien.update(this.addForm.value).subscribe(res => {
        this.router.navigate(['nhan-vien']);
      });
   
        
 
  }
   
}
 