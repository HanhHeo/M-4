import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  form = this.fb.group({
    "email" : ["",[Validators.required, Validators.email]],
    "password": ["",[Validators.required]],
  })
  get f(){
    return this.form.controls;
  }
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.form.value);
  }
}
