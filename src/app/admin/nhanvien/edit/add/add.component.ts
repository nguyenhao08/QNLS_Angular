import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NhanvienService } from 'src/app/services/nhanvien.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  

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
    luong: ['',Validators.required],
  })

   constructor(
     private nhanvien:NhanvienService,
     private router: Router  ,
     private fb : FormBuilder        
     ){}
 
   getAll(){
     this.nhanvien.getList().subscribe(res => {
       this.nhanviens = res;
       console.log(this.nhanviens)
     }  )
   }
   
   ngOnInit(): void {
     this.getAll();
   }
 
   onEdit(id : number){
     alert('Click on button' + id)
   }
 
   onDelete(id : number){
    this.nhanvien.delete(id).subscribe(res => {
     this.getAll();
    })
     
   }


  onSubmit(){
    console.log(this.addForm.value);
    this.nhanvien.add(this.addForm.value).subscribe(res => {
      this.getAll();
    })
  }
    
 
   
 }
 