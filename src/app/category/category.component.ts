import { CategoryService } from '../services/category.service';
import { Category } from './../models/category.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(private service: CategoryService, private router: Router) { }

  removeCategory(id: number){
    console.log('Categoria removida');

    this.service.removeCategory(id).subscribe(
      (result) =>{

        // Retorna para a lista de categorias
       this.router.navigateByUrl('categories');
       // Refresh no componente
       this.ngOnInit();

      },
      (error) => console.error(error)
    );
  }



  ngOnInit(): void {
    this.service.listCategories().subscribe((categories: Category[]) =>{
      this.categories = categories;
    })
  }

}
