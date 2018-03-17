import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from "@angular/forms";
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
  verifyPassWord: string;
  mobile: string;

  constructor(private fb: FormBuilder,private registerService:RegisterService,private router: Router) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required]],
      verifyPassWord: ['', [this. verifymationValidator]],
      mobile:['', [this.mobileValidator]],
    });
  }

  verifymationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls[ 'passWord' ].value) {
      return { error: true };
    }
  };

  mobileValidator = (control: FormControl): { [s: string]: boolean } => {
    const MOBILE_REGEXP = /^[0-9]{11}$/;
    if (!control.value) {
      return { required: true }
    } else if (!MOBILE_REGEXP.test(control.value)) {
      return { error: true };
    }
  };

  register() {
    this.registerService.createUser(this.userName,this.passWord,this.verifyPassWord,this.mobile).subscribe(res=>{
      this.router.navigateByUrl('/login')
    })
  }

}
