import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacementComponent } from './placement.component';

const routes: Routes = [
  { path: 'placement', component:PlacementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacementRoutingModule { }
