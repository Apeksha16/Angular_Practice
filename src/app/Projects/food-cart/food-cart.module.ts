import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodCartComponent } from './food-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [{ path: '', component: FoodCartComponent }];

@NgModule({
  declarations: [FoodCartComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FlexLayoutModule],
})
export class FoodCartModule {}
