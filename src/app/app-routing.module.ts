import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFrontComponent } from './front/layout-front/layout-front.component';
import { LayoutComponent } from './back/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { BarterRequestComponent } from './components/barter-request/barter-request.component';
import { EventComponent } from './components/event/event.component';
import { VenueComponent } from './components/venue/venue.component';
import { ResponseComponent } from './components/response/response.component';
import { FormComponent } from './components/form/form/form.component';
import { AddBarterComponent } from './components/add-barter/add-barter.component';
import { EditBarterComponent } from './components/edit-barter/edit-barter.component';

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
        path: 'barteradd',
        component: AddBarterComponent,
      },
      { path: 'editBarter/:id', component: EditBarterComponent },

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
      {
        path: 'form',
        component: FormComponent,
      },
      {
        path: 'form/create', // Create a new form
        component: FormComponent,
      },
      {
        path: 'form/edit/:id', // Edit an existing form, :id is a parameter
        component: FormComponent,
      },
      {
        path: 'form/:id', // View form details by ID, :id is a parameter
        component: FormComponent,
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
