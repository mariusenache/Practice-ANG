import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablouBordRoutingModule } from './tablou-bord-routing.module';
import { PageComponent } from './page/page.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DescriereComponent } from './descriere/descriere.component';


@NgModule({
  declarations: [
    PageComponent,
    DescriereComponent
  ],
  imports: [
    CommonModule,
    TablouBordRoutingModule,
    NzModalModule,
    NzButtonModule
  ]
})
export class TablouBordModule { }
