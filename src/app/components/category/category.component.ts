import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currenCategory: Category;
  dataLoaded = false;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    });
  }
  setCurrentCategory(category: Category) {
    this.currenCategory = category;
  }
  getCurrentCategoryClass(category: Category) {
    if (category == this.currenCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  getAllCategoryClass() {
    if (!this.currenCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
