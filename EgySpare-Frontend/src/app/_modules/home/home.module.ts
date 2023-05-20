import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterModule } from '../filter/filter.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewProductsComponent } from '../filter/view-products/view-products.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    CategoryListComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FilterModule,
    RouterModule,
  ],
  exports: [HomePageComponent, ViewProductsComponent, RouterModule],
})
export class HomeModule {}
