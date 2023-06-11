import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PhongbanService } from 'src/app/services/phongban.service';


@Component({
  selector: 'app-addpb',
  templateUrl: './addpb.component.html',
  styleUrls: ['./addpb.component.css']
})
export class AddpbComponent implements OnInit {
  
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
     private fb : FormBuilder        
     ){}
 
   getAll(){
     this.phongban.getList().subscribe(res => {
       this.phongbans = res;
       console.log(this.phongbans)
     }  )
   }
   
   ngOnInit(): void {
     this.getAll();
   }
 
   onEdit(id : number){
     alert('Click on button' + id)
   }
 
   onDelete(id : number){
    this.phongban.delete(id).subscribe(res => {
     this.getAll();
    })
     
   }
 
   onSubmit(){
    console.log(this.addForm.value);
    this.phongban.add(this.addForm.value).subscribe(res => {
      this.getAll();
    })
  }
 }
 