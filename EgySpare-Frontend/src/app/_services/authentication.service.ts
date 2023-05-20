import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../_models/login-dto';
import { RegisterDto } from '../_models/register-dto';
import { Setting } from '../_models/setting';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private path = environment.apiUrl;
  userr: RegisterDto[] = [];

  constructor(private http: HttpClient) {}

  register(model: RegisterDto): Observable<any> {
    return this.http.post(`${this.path}Users/register`, model);
  }

  login(model: LoginDto): Observable<any> {
    return this.http.post(`${this.path}Users/login`, model);
  }

  LogOut(): void {
    localStorage.removeItem('user');
  }

  baseurl = 'https://localhost:7029/api/Users';

  getallusers() {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluQG1haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFsaSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiOTk5MjM4ZGMtMTM5My00ZDY3LWFlNGYtMDhkYWMxZDU1ZWEzIiwiZXhwIjoxNjcxOTg4OTc1LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.IFgqwY_5EEpqN32sJ-9EPixCNFtUzqEA9Sf7IgCysAo';
    let headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get<RegisterDto[]>(this.baseurl, {
      headers: headers_object,
    });
  }

  deleteuserbyid(id: any) {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluQG1haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFsaSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiOTk5MjM4ZGMtMTM5My00ZDY3LWFlNGYtMDhkYWMxZDU1ZWEzIiwiZXhwIjoxNjcxOTg4OTc1LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.IFgqwY_5EEpqN32sJ-9EPixCNFtUzqEA9Sf7IgCysAo';
    let headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.delete(this.baseurl + '?userId=' + id, {
      headers: headers_object,
    });
  }

  getuser() {
    //token
    return this.http.get<any>('url');
  }

  AddUser(ur: RegisterDto) {
    return this.http.post(`${this.path}Users/register`, ur);
  }

  changeSetting(set: Setting) {
    return this.http.put<any>(
      'https://localhost:7029/api/Users/' + set.id,
      set
    );
  }
}

//   userData: any = new BehaviorSubject(null);
//   role: any = new BehaviorSubject(null);
//   private path = environment.apiUrl;
//   constructor(public http: HttpClient, private _Router: Router) {}

//
//   login(ur: UserLog) {
//     return this.http.post(`${this.path}Users/login`, ur);
//   }

//   getallusers() {
//     let token =
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluQG1haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFsaSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiOTk5MjM4ZGMtMTM5My00ZDY3LWFlNGYtMDhkYWMxZDU1ZWEzIiwiZXhwIjoxNjcxOTg4OTc1LCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.IFgqwY_5EEpqN32sJ-9EPixCNFtUzqEA9Sf7IgCysAo';
//     let headers_object = new HttpHeaders().set(
//       'Authorization',
//       'Bearer ' + token
//     );
//     return this.http.get<User[]>(this.baseurl, { headers: headers_object });
//   }

//   getusersbyrole(role: any) {
//     return this.http.get<User[]>(this.baseurl + role);
//   }

//   adduser(user: User) {
//     return this.http.post(this.baseurl, user);
//   }

//   updateusers(user: User) {
//     return this.http.put<User>(this.baseurl + user.name, user);
//   }
// }
