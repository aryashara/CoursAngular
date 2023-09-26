import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Demo/home/home.component';
import { BindingsComponent } from './Demo/bindings/bindings.component';
import { Exos1Component } from './Demo/Exos/exos1/exos1.component';
import { Exos2Component } from './Demo/Exos/exos2/exos2.component';
import { TutoComponent } from './Demo/tuto/tuto.component';
import { ShoppingListeV1Component } from './Demo/Correctif/shopping-liste-v1/shopping-liste-v1.component';
import { ChronoV2Component } from './Demo/chrono-v2/chrono-v2.component';
import { PipesComponent } from './Demo/pipes/pipes.component';
import { ChildrenComponent } from './Demo/inputoutput/children/children.component';
import { InputoutputComponent } from './Demo/inputoutput/inputoutput.component';
const routes: Routes = [
  { path: "", component: HomeComponent },//Charge le composant
  { path: "Bindings", component: BindingsComponent },
  { path: "Exos1", component: Exos1Component },
  { path : "Exos2", component: Exos2Component},
  {path : "Tuto", component: TutoComponent},
  { path: "shopping-liste-v1", component: ShoppingListeV1Component },
  { path: "chronoV2", component: ChronoV2Component },
  { path: "pipes", component: PipesComponent },
  {path: "children", component: ChildrenComponent },
  { path: "inputoutput", component: InputoutputComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
