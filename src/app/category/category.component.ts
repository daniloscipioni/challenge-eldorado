import { CategoryService } from '../services/category.service';
import { Category } from './../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.service.listCategories().subscribe((categories: Category[]) =>{
      this.categories = categories;
    })
  }

}
