import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.registerUser(this.user).subscribe(
    {next: (response) => {
        console.log('Registration successful', response);
        // You can redirect to a login page or handle success as needed
      },
      error:(error) => {
        console.error('Registration failed', error);
        // Handle registration failure, show error message, etc.
      }}
    );
  }
}
