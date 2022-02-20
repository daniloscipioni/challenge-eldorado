import { CategoryService } from './../services/category.service';
import { Category } from './../models/category.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent implements OnInit {
  @Output() onRegisterCategory = new EventEmitter<Category>();

  id: number = 0;
  categoryName: String = '';
  formCategory: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CategoryService,
    private router: Router
  ) {
    // Field Validators
    this.formCategory = this.formBuilder.group({
      category: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(128)]),
      ],
    });
  }

  /**
   * @Return Register category
   */
  registerCategory() {
    if (this.formCategory.valid) {
      const categoryValue: Category = {
        id : this.id,
        name: this.categoryName,
      };

      this.service.addCategory(categoryValue).subscribe(
        (result) => {
          // Retorna para a lista de categorias
          this.router.navigateByUrl('categories');
        },
        (error) => console.error(error)
      );
    }
  }

  ngOnInit(): void {}
}
