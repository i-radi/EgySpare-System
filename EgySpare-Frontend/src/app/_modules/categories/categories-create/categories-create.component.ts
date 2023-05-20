import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css'],
})
export class CategoriesCreateComponent implements OnInit {
  ncat: Category = { id: 0, name: '', imgPath: '' };

  // npro:Category ={id:0,name:"",brandId:0,categoryId:0,imgPath:"",price:0}

  constructor(public catser: CategoryService, public router: Router) {}

  save() {
    this.catser.addCategory(this.ncat).subscribe((a) => {
      console.log(a);
      this.router.navigateByUrl('/categories');
    });
  }
  back() {
    this.router.navigateByUrl('/categories');
  }

  onselectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.ncat.imgPath = event.target.result;
      };
    }
  }

  ngOnInit(): void {}
}
