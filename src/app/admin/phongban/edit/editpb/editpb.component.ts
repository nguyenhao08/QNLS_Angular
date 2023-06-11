import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhongbanService } from 'src/app/services/phongban.service';

@Component({
  selector: 'app-editpb',
  templateUrl: './editpb.component.html',
  styleUrls: ['./editpb.component.css']
})
export class EditpbComponent implements OnInit {
  submited: boolean = false;
  phongbans:any;
  addForm = this.fb.group({
    id: '',
    name: '',
    sdt: '',
    diachi:'',
  })

   constructor(
     private phongban:PhongbanService,
     private router: Router  ,
     private fb : FormBuilder ,
     private _router:ActivatedRoute       
     ){}
 
    
     getAll(){
      this._router.paramMap.subscribe(query => {
        let id = query.get("id");
        this.phongban.getById(id).subscribe(res => {
          let view = res
          this.addForm = this.fb.group({
            id: [view.id,Validators.required],
            name: [view.name,Validators.required],
            sdt: [view.sdt,Validators.required],
           // gender: [view.gender,Validators.required],
            diachi: [view.diachi,Validators.required],
            
          })
  
          
        });
        
          });
  
    }
   
   ngOnInit(): void {

      this.getAll();
     } 

     onsubmit(){
      console.log(this.addForm.value);
      this.phongban.update(this.addForm.value).subscribe(res => {
        this.getAll();
      })
    }   
   
    
   get f() {return this.addForm.controls;}
    onSubmit() : any {
      this.submited = true;
      if (this.addForm.invalid) {return false;}

        console.log(this.addForm.value)
      this.phongban.update(this.addForm.value).subscribe(res => {
        this.router.navigate(['nhan-vien']);
      });
   
        
 
  }
   
}