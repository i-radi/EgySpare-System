import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDto } from 'src/app/_models/register-dto';
import { TokenDto } from 'src/app/_models/token';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: RegisterDto = {
    id: '',
    userName: '',
    email: '',
    name: '',
    password: '',
    phoneNumber: '',
    role: '',
  };

  constructor(public service: AuthenticationService, private route: Router) {}

  createAccount() {
    this.service.register(this.user).subscribe((response: TokenDto) => {
      console.log(response);
      localStorage.setItem('token', response.token);
    });
  }

  // resp: any = {} as TokenDto;
  // add() {
  //   this.service
  //     .AddUser(
  //       new User(
  //         this.user.Name,
  //         this.user.UserName,
  //         this.user.Email,
  //         this.user.Password,
  //         this.user.ConfirmPassword,
  //         this.user.PhoneNumber,
  //         this.user.role
  //       )
  //     )
  //     .subscribe((response) => {
  //       //  console.log(response);
  //       this.resp = response;
  //       localStorage.setItem('token', this.resp.token);
  //       this.route.navigateByUrl('/home');
  //     });
  // }

  ngOnInit(): void {}
}
