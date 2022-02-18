import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.scss']
})
export class NewDeviceComponent implements OnInit {

  categories: Category[] = [];

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.service.listCategories().subscribe((categories: Category[]) =>{
      this.categories = categories;
    })
  }

}
