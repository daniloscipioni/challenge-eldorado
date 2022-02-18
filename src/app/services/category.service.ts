import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private listCategory: Category[] = [];
  private url = 'http://localhost:3000/categories';

  constructor(private httpClient: HttpClient) {
    this.listCategory = [];
  }

  listCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.url);
  }

  addCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.url, category);
  }
}
