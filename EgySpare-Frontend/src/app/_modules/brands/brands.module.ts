import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsCreateComponent } from './brands-create/brands-create.component';
import { BrandsDetailsComponent } from './brands-details/brands-details.component';
import { BrandsListComponent } from './brands-list/brands-list.component';
import { BrandsUpdateComponent } from './brands-update/brands-update.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BrandsCreateComponent,
    BrandsDetailsComponent,
    BrandsListComponent,
    BrandsUpdateComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [RouterModule],
})
export class BrandsModule {}
