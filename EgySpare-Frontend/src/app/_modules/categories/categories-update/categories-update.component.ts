import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.css'],
})
export class CategoriesUpdateComponent implements OnInit {
  cat: Category = { id: 0, name: '', imgPath: '' };
  id: number = 0;
  constructor(
    public catser: CategoryService,
    public router: Router,
    public ar: ActivatedRoute
  ) {}

  save() {
    this.catser.updateCategory(this.cat).subscribe((a) => {
      console.log(a), this.router.navigateByUrl('/categories');
    });
  }

  back() {
    this.router.navigateByUrl('/categories');
  }

  ngOnInit() {
    this.ar.params.subscribe((a) => {
      let id = a['id'];
      this.catser.getCategoryById(id).subscribe((c) => {
        this.cat = c;
      });
    });
  }
}
