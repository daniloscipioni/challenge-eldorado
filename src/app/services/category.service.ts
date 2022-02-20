import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private listCategory: Category[] = [];
  private url = 'https://challenge-eldorado-backend.herokuapp.com/api';

  constructor(private httpClient: HttpClient) {
    this.listCategory = [];
  }

  listCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.url}/categories`)
    .pipe(map((result:Category|any) => result.data));
  }

  addCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(`${this.url}/add-category`, category);
  }

  removeCategory(id: number): Observable<Category>{
    return this.httpClient.delete<Category>(`${this.url}/remove-category/${id}`);
  }
}
