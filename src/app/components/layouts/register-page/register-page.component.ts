import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/user/loginservice.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  constructor(private loginService: LoginserviceService, private _router: Router) {}
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  // Mock Register user
  async register() {
    (await this.loginService.registerRequest(this.registerForm.value)).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => {alert("Registration Successful!"), this._router.navigate(['login']);}
    })
  }
}
