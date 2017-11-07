import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  userName: string;
  passWord: string;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
        userName: [ null, [ Validators.required ] ],
        passWord: [ null, [ Validators.required ] ]
    });
  }

  login() {
    console.log(`用户名:${this.userName},密码:${this.passWord}`);
    this.router.navigateByUrl("workspace");
  }
}
