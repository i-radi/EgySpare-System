import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { VendorComponent } from './vendor/vendor.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShoppingCardComponent, VendorComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [ShoppingCardComponent, VendorComponent, RouterModule],
})
export class OrdersModule {}
