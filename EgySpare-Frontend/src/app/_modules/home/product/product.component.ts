import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public faCoffee = faCoffee;
  Products: Product[] = [];
  newProduct: Product = {
    id: '',
    name: '',
    price: 0,
    imgPath: '',
    modelNumber: '',
    manufacture: '',
    details: '',
    count: 0,
    brandId: 0,
    categoryId: 0,
  };
  constructor(
    public ProductService: ProductService,
    public http: HttpClient,
    public router: Router,
    public ActiveRouter: ActivatedRoute
  ) {}

  change(t1: HTMLParagraphElement) {
    console.log(t1.innerHTML);
  }

  addProduct(prod: Product) {
    this.ProductService.AddProduct().subscribe((p) => {
      console.log(prod);
      console.log(p);
    });
  }
  ngOnInit() {
    return this.ProductService.GetAllPerPage().subscribe((a) => {
      this.Products = a;
      console.log(this.Products);
    });
  }
}
