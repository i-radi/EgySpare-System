import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  constructor(public cateogrySevices: CategoryService) {}

  Cetegories: Category[] = [];
  ngOnInit(): void {
    this.cateogrySevices.GetAll().subscribe((a) => {
      this.Cetegories = a;
      console.log(this.Cetegories);
    });
  }
}
