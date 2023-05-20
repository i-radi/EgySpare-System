import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Brand } from '../_models/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private path = environment.apiUrl;
  constructor(public http: HttpClient) {}

  GetAll() {
    return this.http.get<Brand[]>(`${this.path}Brands/`);
  }

  getBrandById(id: number) {
    return this.http.get<Brand>(`${this.path}Brands/` + id);
  }

  addBrand(brand: Brand) {
    return this.http.post(`${this.path}Brands/`, brand);
  }

  deleteBrandById(id: number) {
    return this.http.delete(`${this.path}Brands/` + id);
  }

  updateBrand(brand: Brand) {
    return this.http.put<Brand>(`${this.path}Brands/` + brand.id, brand);
  }
}
