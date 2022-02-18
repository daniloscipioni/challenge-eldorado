import { CategoryService } from './../services/category.service';
import { Category } from './../models/category.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {
  @Output() onRegisterCategory = new EventEmitter<Category>();

  id : number = 0;
  categoryName: String = "";

  constructor( private service: CategoryService, private router: Router) { }

  registerCategory(){
    console.log('Categoria enviada');
    const categoryValue: Category = {
      id: this.id,
      name: this.categoryName
    };

    this.service.addCategory(categoryValue).subscribe(
      (result) =>{
        console.log(result);
        // Retorna para a lista de categorias
        this.router.navigateByUrl('categories');
      },
      (error) => console.error(error)
    );
  }

  ngOnInit(): void {
  }

}
