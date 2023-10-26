import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFrontComponent } from './front/layout-front/layout-front.component';
import { LayoutComponent } from './back/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { ForumComponent } from './components/forum/forum.component';
import { BarterRequestComponent } from './components/barter-request/barter-request.component';
import { EventComponent } from './components/event/event.component';
import { VenueComponent } from './components/venue/venue.component';
import { ResponseComponent } from './components/response/response.component';
import { FormComponent } from './components/form/form/form.component';
import { AddBarterComponent } from './components/add-barter/add-barter.component';
import { EditBarterComponent } from './components/edit-barter/edit-barter.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { AddVenueComponent } from './components/add-venue/add-venue.component';
import { EditVenueComponent } from './components/edit-venue/edit-venue.component';
import { AddResponseComponent } from './components/add-response/add-response.component';
import { EditResponseComponent } from './components/edit-response/edit-response.component';

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
        path: 'eventadd',
        component: AddEventComponent,
      },
      { path: 'editevent/:id', component: EditEventComponent },

      {
        path: 'venues',
        component: VenueComponent,
      },
      {
        path: 'addvenue',
        component: AddVenueComponent,
      },
      {
        path: 'editvenue/:id',
        component: EditVenueComponent,
      },
      {
        path: 'responses',
        component: ResponseComponent ,
      },
      {
        path: 'addresponse',
        component: AddResponseComponent ,
      },
      {
        path: 'editresponse/:id',
        component: EditResponseComponent,
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
    path: 'back/forum',
    component: ForumComponent,
    // Add more routes for the "front" section as needed
  },
  {
    path: 'front',
    component: LayoutFrontComponent,

  },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent }
  
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    LayoutFrontComponent
  ],
})
export class AppRoutingModule {}
