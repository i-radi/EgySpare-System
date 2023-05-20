import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/_models/brand';
import { Category } from 'src/app/_models/category';
import { Product } from 'src/app/_models/product';
import { BrandService } from 'src/app/_services/brand.service';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public frontImg: string =
    'assets/car/close-up-beautiful-rim-dark-blue-background-3d-illustration.jpg';
  brand: Brand[] = [];
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
  Categories: Category[] = [];

  constructor(
    public http: HttpClient,
    public brandService: BrandService,
    public ProductService: ProductService,
    public ActiveRouter: ActivatedRoute,
    public categoryService: CategoryService
  ) {}

  addProduct(prod: Product) {
    this.ProductService.AddProduct().subscribe((p) => {
      console.log(prod);
      console.log(p);
    });
  }
  ngOnInit() {
    this.brandService.GetAll().subscribe((a) => {
      this.brand = a;
      console.log(this.brand);
    });
    this.categoryService.GetAll().subscribe((a) => {
      this.Categories = a;
      console.log(this.Categories);
    });

    return this.ProductService.GetAllPerPage().subscribe((a) => {
      this.Products = a;
      console.log(this.Products);
    });
  }
}
