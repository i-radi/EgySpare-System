import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/_models/brand';
import { Category } from 'src/app/_models/category';
import { Product } from 'src/app/_models/product';
import { BrandService } from 'src/app/_services/brand.service';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  npro: Product = {
    id: '',
    name: '',
    brandId: 0,
    categoryId: 0,
    imgPath: '',
    price: 0,
    manufacture: '',
    modelNumber: '',
    details: '',
    count: 0,
  };

  nbrand: Brand[] = [];
  ncat: Category[] = [];

  constructor(
    public catser: CategoryService,
    public brandser: BrandService,
    public proser: ProductService,
    public router: Router
  ) {}

  save() {
    this.proser.addProduct(this.npro).subscribe((a) => {
      console.log(a), this.router.navigateByUrl('/admin/product/list');
    });
  }

  back() {
    this.router.navigateByUrl('/admin/product/list');
  }

  onselectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.npro.imgPath = event.target.result;
      };
    }
  }

  ngOnInit() {
    this.brandser.GetAll().subscribe((b) => {
      (this.nbrand = b),
        this.catser.GetAll().subscribe((c) => {
          this.ncat = c;
        });
    });
  }
}
