import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/_models/brand';
import { BrandService } from 'src/app/_services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
})
export class BrandListComponent implements OnInit {
  public frontImg: string =
    'assets/car/close-up-beautiful-rim-dark-blue-background-3d-illustration.jpg';
  brand: Brand[] = [];
  constructor(public http: HttpClient, public Brandservice: BrandService) {}
  change() {
    let t1 = document.getElementById('t1')?.innerHTML;
    console.log(t1);
  }
  ngOnInit(): void {
    this.Brandservice.GetAll().subscribe((a) => {
      this.brand = a;
      console.log(this.brand);
    });
  }
}
