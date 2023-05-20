import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCardService {
  public products: any[] = [];
  private path = environment.apiUrl + 'ShoppingCarts/';
  constructor(public http: HttpClient) {}

  GetProductbyId(id: string) {
    return this.http.get<Product>(this.path + id);
  }

  getProduct() {
    let token: string = localStorage.getItem('token')!;

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get<any[]>(this.path, { headers: headers_object });
  }

  removeproduct(id: string) {
    let token: string = localStorage.getItem('token')!;
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.delete<any>(`${this.path}?productId=` + id, {
      headers: headers_object,
    });
  }

  decrementCount(id: string) {
    let token: string = localStorage.getItem('token')!;
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.put<any>(
      `${this.path}DecrementCount?productId=` + id,
      null,
      {
        headers: headers_object,
      }
    );
  }

  incrementCount(id: string) {
    let token: string = localStorage.getItem('token')!;
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.put<any>(
      `${this.path}IncrementCount?productId=` + id,
      null,
      {
        headers: headers_object,
      }
    );
  }
}
