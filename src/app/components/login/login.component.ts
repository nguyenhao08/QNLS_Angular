import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message!: string;
  loginForm!: FormGroup;

  constructor(private fba: FormBuilder, private userService: UserService, private __router: Router) {
    this.loginForm = this.fba.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  handleLogin(form: FormGroup) {
    if (form.valid) {
      const { username, password } = form.value;
      this.userService.login().subscribe((userList: User[]) => {
        const user = userList.find((user: User) => {
          if (username === user.username && password === user.password) {
            this.__router.navigateByUrl('Admin');
          }
        })
        if (!user) {
          this.loginForm.reset();
          this.message = 'Tài khoản hoặc mật khẩu không đúng';
        }
      })
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
