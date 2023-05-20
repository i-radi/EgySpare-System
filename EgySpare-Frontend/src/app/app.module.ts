import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './_modules/home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './_modules/shared/shared.module';
import { UserModule } from './_modules/user/user.module';
import { VendorComponent } from './_modules/orders/vendor/vendor.component';
import { AdminNavComponent } from './_modules/core/admin-nav/admin-nav.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CategoriesModule } from './_modules/categories/categories.module';
import { ProductModule } from './_modules/product/product.module';
import { BrandsModule } from './_modules/brands/brands.module';
import { OrdersModule } from './_modules/orders/orders.module';
// // import { CategoriesUpdateComponent } from './_modules/categories/categories-update/categories-update.component';
// // import { CategoriesCreateComponent } from './_modules/categories/categories-create/categories-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavComponent,
    // CategoriesCreateComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    UserModule,
    MatListModule,
    MatSidenavModule,
    CategoriesModule,
    ProductModule,
    BrandsModule,
    OrdersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
