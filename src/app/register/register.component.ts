import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  account: Account = new Account(); // Model for form binding

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  // Method triggered on form submission
  onSubmit() {
    this.saveAccount();
  }

  // Method to call the service and save the account
  saveAccount() {
    this.accountService.createAccount(this.account).subscribe(
      (response) => {
        console.log('Account created successfully:', response);
        alert('Account successfully created!');
      },
      (error) => {
        console.error('Error creating account:', error);
        alert('Failed to create account. Please try again.');
      }
    );
  }
}
