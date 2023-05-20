import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  pro: Product = {
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

  name: any = '';
  constructor(
    public prodser: ProductService,
    public router: Router,
    public ar: ActivatedRoute
  ) {}

  save() {
    this.prodser.updateCategory(this.pro).subscribe((a) => {
      console.log(a), this.router.navigateByUrl('/admin/product/list');
    });
  }

  back() {
    this.router.navigateByUrl('/admin/product/list');
  }

  ngOnInit() {
    this.ar.params.subscribe((a) => {
      let name = a['name'];
      this.prodser.getProductByName(name).subscribe((c) => {
        this.pro = c;
      });
    });
  }
}
