import { LoginService } from './login.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, } from "@angular/forms";
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  userName: string = 'admin';
  passWord: string = '123123';
  mobile: string;

  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService, private _message: NzMessageService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      passWord: [null, [Validators.required]]
    });
  }


  login() {
    this.loginService.login(this.userName, this.passWord).subscribe((res:any) => {
      window.sessionStorage.setItem('token',res.token)
      this.router.navigateByUrl("workspace");
    })
    
  }
}
