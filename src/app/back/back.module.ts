import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { ForumComponent } from './forum/forum.component';


@NgModule({
  declarations: [
    ForumComponent
  ],
  imports: [
    CommonModule,
    BackRoutingModule
  ]
})
export class BackModule { }
