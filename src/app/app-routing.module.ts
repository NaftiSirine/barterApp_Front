import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFrontComponent } from './front/layout-front/layout-front.component';
import { LayoutComponent } from './back/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { BarterRequestComponent } from './components/barter-request/barter-request.component';
import { EventComponent } from './components/event/event.component';
import { VenueComponent } from './components/venue/venue.component';
import { ResponseComponent } from './components/response/response.component';

const routes: Routes = [
  {
    path: 'back',
    component: LayoutComponent,
    children: [
      {
        path: 'barterRequests',
        component: BarterRequestComponent,
      },
      {
        path: 'events',
        component: EventComponent,
      },
      {
        path: 'venues',
        component: VenueComponent,
      },
      {
        path: 'responses',
        component: ResponseComponent,
      },
    ],
  },
  {
    path: 'front',
    component: LayoutFrontComponent,

  },
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    LayoutFrontComponent
  ],
})
export class AppRoutingModule {}
