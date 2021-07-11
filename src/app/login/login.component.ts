import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    public api: ApiService,
    public router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit():void {
    if (this.form.valid) {
      this.api.login(this.form.value)
      .then((res: any) => {
        if (res && res.token){
          this.router.navigate(['user/dashboard']);
        }else{
          alert('Invalid Username && Password');
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Invalid Username && Password');
      });
    }
    this.formSubmitAttempt = true;
  }
}
