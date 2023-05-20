import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  public category: any[] = [];
  public brand: any[] = [];
  public product: Product[] = [];
  private path = environment.apiUrl;
  BrandUrl: string = this.path + 'Brands';
  CategoryUrl: string = this.path + 'Categories';
  PostProductUrl: string = this.path + 'Products';
  constructor(public http: HttpClient) {}

  getAllCategory() {
    return this.http.get<any[]>(this.CategoryUrl);
  }

  getAllBrand() {
    return this.http.get<any[]>(this.BrandUrl);
  }

  AddProduct(product: Product) {
    let token: string = localStorage.getItem('token')!;
    var headers_object = new HttpHeaders().set('Authorization', token);
    return this.http.post<Product>(this.PostProductUrl, product, {
      headers: headers_object,
    });
  }
}
