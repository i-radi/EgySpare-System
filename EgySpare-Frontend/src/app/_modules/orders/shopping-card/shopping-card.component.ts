import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/_models/product';
import { ShoppingCardService } from 'src/app/_services/shopping-card.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
})
export class ShoppingCardComponent implements OnInit {
  img: string = 'assets/Img/1.webp';
  //products: Product[] = [];
  thetotal: number = 0;
  public products: any[] = [];
  flag: boolean = false;
  dummyId: string = '';
  No: number = 0;
  product: Product = {
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
  constructor(public Cartservice: ShoppingCardService, public router: Router) {}

  GetCartItem() {
    this.Cartservice.getProduct().subscribe((res) => {
      console.log(res);
      this.products = res;
      this.getcarttotal('+');
    });
  }

  DeleteItem(id: string) {
    if (confirm('Are You Sure') == true) {
      this.Cartservice.removeproduct(id).subscribe((Delete) => {
        this.GetCartItem();
      });
    }
  }

  Mins(id: string) {
    console.log(id);
    this.Cartservice.decrementCount(id).subscribe((m) => {
      this.GetCartItem();
      this.getcarttotal('-');
    });
  }

  plus(id: string) {
    console.log(id);
    this.Cartservice.incrementCount(id).subscribe((P) => {
      this.GetCartItem();
      this.getcarttotal('+');
    });
  }

  getcarttotal(operator: string) {
    this.thetotal = 0;
    this.products.forEach((element) => {
      if (operator == '-') this.thetotal -= element.price * element.count;
      else this.thetotal += element.price * element.count;
    });
  }

  ngOnInit() {
    this.GetCartItem();
  }
  alert() {
    Swal.fire(
      'Thank You',
      'We Repair Your Product And Contact With You..',
      'success'
    );
    this.router.navigateByUrl('/home');
  }
}
