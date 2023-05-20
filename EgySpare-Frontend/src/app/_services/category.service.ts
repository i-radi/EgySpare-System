import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private path = environment.apiUrl;
  constructor(public http: HttpClient) {}

  GetAll() {
    return this.http.get<Category[]>(`${this.path}Categories/`);
  }

  getCategoryById(id: number) {
    return this.http.get<Category>(`${this.path}Categories/` + id);
  }

  addCategory(category: Category) {
    return this.http.post(`${this.path}Categories/`, category);
  }

  deleteCategoryById(id: number) {
    return this.http.delete(`${this.path}Categories/` + id);
  }

  updateCategory(category: Category) {
    return this.http.put<Category>(
      `${this.path}Categories/` + category.id,
      category
    );
  }
}
