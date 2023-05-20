import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesCreateComponent } from './categories-create/categories-create.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesUpdateComponent } from './categories-update/categories-update.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CategoriesCreateComponent,
    CategoriesDetailsComponent,
    CategoriesListComponent,
    CategoriesUpdateComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [RouterModule],
})
export class CategoriesModule {}
