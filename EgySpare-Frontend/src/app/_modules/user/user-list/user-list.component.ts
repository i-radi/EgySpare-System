import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDto } from 'src/app/_models/register-dto';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public X: RegisterDto[] = [];
  constructor(public router: Router, public userser: AuthenticationService) {}

  ngOnInit(): void {
    this.userser.getallusers().subscribe((a) => {
      (this.X = a), console.log(this.X);
    });
  }

  deleteuser(id: any) {
    if (confirm('are you sure') == true) {
      this.userser.deleteuserbyid(id).subscribe((a) => {
        this.userser.getallusers().subscribe((c) => {
          this.X = c;
        });
      });
    }
  }
}
