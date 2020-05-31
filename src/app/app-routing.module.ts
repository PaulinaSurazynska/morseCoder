import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InteractionComponent } from './interaction/interaction.component';
import { AttractorComponent } from './attractor/attractor.component';

const routes: Routes = [
  { path: 'interaction', component: InteractionComponent, data: { animation: 'isRight' } },
  { path: '', component: AttractorComponent, data: { animation: 'isLeft' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
