import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SettingComponent,
    UserListComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    LoginComponent,
    SignupComponent,
    UserListComponent,
    SettingComponent,
  ],
})
export class UserModule {}
