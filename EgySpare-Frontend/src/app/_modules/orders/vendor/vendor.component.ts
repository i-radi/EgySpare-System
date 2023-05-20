import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/_models/brand';
import { Category } from 'src/app/_models/category';
import { Product } from 'src/app/_models/product';
import { VendorService } from 'src/app/_services/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
})
export class VendorComponent implements OnInit {
  url = './assets/';

  MyImage: string = 'assets/Img/2773355.png';
  MyImage1: string = 'assets/Img/1.webp';
  Catg: Category[] = [];
  Brands: Brand[] = [];
  product: Product[] = [];
  message: boolean = false;
  @Output() NewPro: any = [];

  constructor(public VendorService: VendorService, public http: HttpClient) {}

  OnProductCreate(product: Product) {
    console.log(product);
    this.VendorService.AddProduct(product).subscribe((result) => {
      console.log(result);
      this.message = true;
    });
  }

  GetAllCategory() {
    this.VendorService.getAllCategory().subscribe((res) => {
      console.log(res);
      this.Catg = res;
    });
  }

  GetAllBrand() {
    this.VendorService.getAllBrand().subscribe((res) => {
      console.log(res);
      this.Brands = res;
    });
  }

  ngOnInit() {}
  DoneAlert() {
    Swal.fire('Good job!', 'You Product Is Added', 'success');
  }
}
