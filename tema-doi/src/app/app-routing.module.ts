import { EchipaComponent } from './echipa/echipa.component';
import { TablouBordModule } from './tablou-bord/tablou-bord.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    component: EchipaComponent,
    path: "echipa"
  },
  {
    path:"tabloubord",
    loadChildren: () => import('./tablou-bord/tablou-bord.module').then(m => m.TablouBordModule) //lazyloading = sa le ruleze pe rand
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
