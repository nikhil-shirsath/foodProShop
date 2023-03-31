import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

const routes: Routes = [

  // this routs for annomous users 

  {path:'' ,component :ProductsComponent},
  {path:'products' ,component :ProductsComponent},
  {path:'login' ,component :LoginComponent},
  {path:'shoping-cart' ,component :ShopingCartComponent},

  // this routs for the login users 
  {path:'order-success' ,component :OrderSuccessComponent , canActivate:[AuthGuard]},
  {path:'my/orders' ,component :MyOrdersComponent ,canActivate:[AuthGuard]},
  {path:'check-out' ,component :CheckOutComponent , canActivate:[AuthGuard]},


  // this routs for the admins 

  {path:'admin/products/new' ,
  component :ProductFormComponent ,
  canActivate:[AuthGuard ,AdminAuthGuard]
  },
  {path:'admin/products/id' ,
  component :ProductFormComponent ,
  canActivate:[AuthGuard ,AdminAuthGuard]
  },
  {path:'admin/products' ,
  component :AdminProductsComponent ,
  canActivate:[AuthGuard ,AdminAuthGuard]
  },
  {path:'admin/orders' ,
  component :AdminOrdersComponent ,
  canActivate:[AuthGuard, AdminAuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
