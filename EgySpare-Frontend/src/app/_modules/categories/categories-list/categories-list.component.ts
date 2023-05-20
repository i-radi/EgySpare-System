import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  cat: Category[] = [];
  constructor(public catser: CategoryService, public router: Router) {}

  gotocreate() {
    this.router.navigateByUrl('categories/create');
  }

  deleteCategory(id: number) {
    if (confirm('are you sure') == true) {
      this.catser.deleteCategoryById(id).subscribe((a) => {
        this.catser.GetAll().subscribe((c) => {
          this.cat = c;
        });
      });
    }
  }
  gotoupdate(id: number) {
    this.router.navigate(['/categories/update', id]);
  }

  ngOnInit() {
    this.catser.GetAll().subscribe((a) => {
      (this.cat = a), console.log(this.cat);
    });
  }
}
