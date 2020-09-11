import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent } from "../app/components/pages/container-app/container-app.component";
import { ShowProdComponent } from './components/pages/productos/show-prod/show-prod.component';

const routes: Routes = [
  {
    path: '', component: ContainerAppComponent,
    children:[
      { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, 
      { path: 'nosotros', loadChildren: () => import('./components/pages/nosotros/nosotros.module').then(m => m.NosotrosModule) }, 
      { path: 'productos', loadChildren: () => import('./components/pages/productos/productos.module').then(m => m.ProductosModule) }, 
      { path: 'servicios', loadChildren: () => import('./components/pages/servicios/servicios.module').then(m => m.ServiciosModule) }, 
      { path: 'almacenaje', loadChildren: () => import('./components/pages/almacenaje/almacenaje.module').then(m => m.AlmacenajeModule) }, 
      { path: 'contacto', loadChildren: () => import('./components/pages/contacto/contacto.module').then(m => m.ContactoModule) },
      { path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule) },   
      { path: 'envases', loadChildren: () => import('./components/pages/envases/envases.module').then(m => m.EnvasesModule) },  
      { path: 'show-prod/:id', component: ShowProdComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
  { path: 'admin', loadChildren: () => import('./components/pages/admin/admin.module').then(m => m.AdminModule) },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
