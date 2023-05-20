import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/_models/setting';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent implements OnInit {
  set: any = {} as Setting;
  constructor(public service: AuthenticationService) {}

  ngOnInit(): void {}
  change() {
    this.service.changeSetting(this.set).subscribe((a) => {
      console.log(a);
    });
    this.service.getuser().subscribe((a) => (this.set = a));
  }
}
