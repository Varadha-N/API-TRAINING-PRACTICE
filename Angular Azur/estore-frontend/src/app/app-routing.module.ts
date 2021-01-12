import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'',redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'searchProducts/:criteria/:condition',
    component:SearchComponent
  },
  {
    path:'updateProduct/:id',
    component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
