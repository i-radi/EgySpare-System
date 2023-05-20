import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/_models/brand';
import { BrandService } from 'src/app/_services/brand.service';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css'],
})
export class BrandsListComponent implements OnInit {
  brand: Brand[] = [];

  constructor(public brandser: BrandService, public router: Router) {}

  gotocreate() {
    this.router.navigateByUrl('/admin/brand/create');
  }

  delete(id: number) {
    if (confirm('are you sure') == true) {
      this.brandser.deleteBrandById(id).subscribe((a) => {
        this.brandser.GetAll().subscribe((c) => {
          this.brand = c;
        });
      });
    }
  }

  gotoupdate(id: number) {
    this.router.navigate(['/admin/brand/update', id]);
  }

  ngOnInit() {
    this.brandser.GetAll().subscribe((a) => {
      (this.brand = a), console.log(this.brand);
    });
  }
}
