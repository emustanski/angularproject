import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { AuthService } from 'src/app/core/auth.service';

// const myRequired = (control: AbstractControl) => {
//   return Validators.required(control);
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // errorMessage: string = '';
  // emailValidator: EmailValidator;

  // loginFromGroup: FormGroup = this.formBuilder.group({
  //   email: new FormControl('', { validators: [myRequired], updateOn: 'submit'}),
  //   password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  // })
  constructor(
     public authService: AuthService,
    // private formBuilder: FormBuilder,
    // private actRoute: ActivatedRoute,
    // private router: Router 
    ) { }

  ngOnInit(): void {
  }

}
