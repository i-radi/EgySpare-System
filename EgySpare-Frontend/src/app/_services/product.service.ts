import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Card } from '../_models/card';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  constructor(public http: HttpClient) {}
  private path = environment.apiUrl + 'Products/';
  CategoryId: number = 0;
  brandId: number = 0;

  GetProductPerCategory(id: number) {
    return this.http.get<Product[]>(
      `${this.path}withCategory?categoryId=${id}&pageNumber=2&productsPerPage=10`
    );
  }

  GetProductByBrand(id: number) {
    return this.http.get<Product[]>(
      `${this.path}withBrand?brandId=${id}&pageNumber=2&productsPerPage=10`
    );
  }

  GetAllPerPage() {
    return this.http.get<Product[]>(this.path);
  }

  AddProduct() {
    return this.http.post<Product>(this.path, this.products);
  }

  GetProductById(id: string) {
    return this.http.get<Product>(this.path + id);
  }

  addProduct(product: Product) {
    return this.http.post(this.path, product);
  }
  deleteProductById(id: number) {
    return this.http.delete(this.path + id);
  }
  deleteProductByName(name: string) {
    return this.http.delete(this.path + name);
  }

  updateCategory(product: Product) {
    return this.http.put<Product>(this.path + product.id, product);
  }
  updateCategoryByName(product: Product) {
    return this.http.put<Product>(this.path + product.name, product);
  }

  getProductByName(name: string) {
    return this.http.get<Product>(this.path + name);
  }

  getAllProducts() {
    return this.http.get<Product[]>(this.path);
  }

  AddProductToCard(Product: Card) {
    return this.http.post<Card>(
      'https://localhost:7029/api/ShoppingCarts',
      Product
    );
  }
}
