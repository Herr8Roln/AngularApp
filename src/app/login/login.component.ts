import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Import necessary classes

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;  // Declare the form group

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the form group
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Define 'email' control with validators
      password: ['', [Validators.required, Validators.minLength(6)]]  // Define 'password' control with validators
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.loginForm.valid) {
      // If form is valid, log the form value (you can replace this with logic to handle login)
      console.log(this.loginForm.value);
    } else {
      console.log("Form is not valid");
    }
  }
}
