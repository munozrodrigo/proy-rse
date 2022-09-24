import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-rectorado',
  templateUrl: './log-rectorado.component.html',
  styleUrls: ['./log-rectorado.component.scss']
})
export class LogRectoradoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    // public form : FormBuilder;
    // this.form = this.formBuilder.group({
    //   name: [
    //     null,
    //     [
    //       Validators.required
    //     ]
    //   ],
    //   password: [
    //     null,
    //     [
    //       Validators.required]
    //   ]
    // })
  }
   

  ngOnInit(): void {
  }

  loginForm = new FormGroup ({
    user:new FormControl(''),
    password:new FormControl(''),
  })

  loginUser(){
    console.warn(this.loginForm.value);
  }
}
