import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EjempipesComponent } from './components/ejempipes/ejempipes.component';
import { ConsumoapiComponent } from './components/consumoapi/consumoapi.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'pipes_ejemplos', component: EjempipesComponent },
  { path: 'api', component: ConsumoapiComponent },
  // Crear el componente de Error 404 
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
