import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from "@angular/forms";
import { Router } from "@angular/router";
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  userName: string;
  passWord: string;
  mobile: string;

  constructor(private fb: FormBuilder,private registerService:RegisterService,private router: Router) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      passWord: [null, [Validators.required]],
      verifyPassWord: [null, [Validators.required]],
      mobile:[null, [Validators.required]],
    });
  }


  register() {
    this.registerService.createUser(this.userName,this.passWord,this.mobile).subscribe(res=>{
      this.router.navigateByUrl('/login')
    })
  }

}
