import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BrandsCreateComponent } from './_modules/brands/brands-create/brands-create.component';
import { BrandsListComponent } from './_modules/brands/brands-list/brands-list.component';
import { BrandsUpdateComponent } from './_modules/brands/brands-update/brands-update.component';
import { CategoriesCreateComponent } from './_modules/categories/categories-create/categories-create.component';
import { CategoriesListComponent } from './_modules/categories/categories-list/categories-list.component';
import { CategoriesUpdateComponent } from './_modules/categories/categories-update/categories-update.component';
import { AdminNavComponent } from './_modules/core/admin-nav/admin-nav.component';
import { ViewProductsComponent } from './_modules/filter/view-products/view-products.component';
import { HomePageComponent } from './_modules/home/home-page/home-page.component';
import { ShoppingCardComponent } from './_modules/orders/shopping-card/shopping-card.component';
import { VendorComponent } from './_modules/orders/vendor/vendor.component';
import { ProductDetailsComponent } from './_modules/product/product-details/product-details.component';
import { ProductListComponent } from './_modules/product/product-list/product-list.component';
import { LoginComponent } from './_modules/user/login/login.component';
import { SettingComponent } from './_modules/user/setting/setting.component';
import { SignupComponent } from './_modules/user/signup/signup.component';
import { UserListComponent } from './_modules/user/user-list/user-list.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'card', component: ShoppingCardComponent },
  { path: 'Vendor', component: VendorComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'Products', component: ViewProductsComponent },
  { path: '', component: HomePageComponent },
  { path: 'ProductDetails', component: ProductDetailsComponent },
  { path: 'Admin', component: AdminNavComponent, canActivate: [AuthGuard] },
  { path: 'categories', component: CategoriesListComponent },
  { path: 'categories/create', component: CategoriesCreateComponent },
  { path: 'categories/update/:id', component: CategoriesUpdateComponent },
  { path: 'admin/product/list', component: ProductListComponent },
  { path: 'admin/brand/list', component:  BrandsListComponent},
  { path: 'admin/brand/create', component: BrandsCreateComponent },
  { path: 'admin/brand/update/:id', component: BrandsUpdateComponent },
  { path: 'admin/users/list', component: UserListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
