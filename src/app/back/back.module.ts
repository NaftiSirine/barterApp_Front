import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { ForumComponent } from './forum/forum.component';
import { HttpClientModule } from '@angular/common/http';
import { BarterRequestService } from './services/barter-request.service';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ForumComponent
  ],
  imports: [
  ],
  imports: [BrowserModule,
    CommonModule,
    BackRoutingModule,
    HttpClientModule
  ],
  providers:[BarterRequestService]
})
export class BackModule { }
