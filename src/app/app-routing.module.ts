import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResistenciaComponent } from './resistencia/resistencia.component';

const routes: Routes = [];
{path:'resistencia'; component:ResistenciaComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
