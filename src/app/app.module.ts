import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './back/header/header.component';
import { LayoutComponent } from './back/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForumComponent } from './components/forum/forum.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BarterRequestComponent } from './components/barter-request/barter-request.component';
import { EventComponent } from './components/event/event.component';
import { VenueComponent } from './components/venue/venue.component';
import { ResponseComponent } from './components/response/response.component';
import { FormComponent } from './components/form/form/form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddFormComponent } from './components/form/add/add-form/add-form.component';
import { EditFormComponent } from './components/form/edit/edit-form/edit-form.component';
import { ViewFormComponent } from './components/form/view/view-form/view-form.component';
import { DeleteFormComponent } from './components/form/delete/delete-form/delete-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBarterComponent } from './components/add-barter/add-barter.component';
import { EditBarterComponent } from './components/edit-barter/edit-barter.component';
import { AddResponseComponent } from './components/add-response/add-response.component';
import { EditResponseComponent } from './components/edit-response/edit-response.component';
import { EditVenueComponent } from './components/edit-venue/edit-venue.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { AddVenueComponent } from './components/add-venue/add-venue.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryComponent } from './components/category/category.component';
import { AddannonceComponent } from './components/addannonce/addannonce.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { EditAnnonceComponent } from './components/edit-annonce/edit-annonce.component';
import { EditcategoryComponent } from './components/editcategory/editcategory.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    RegisterComponent,
    LogInComponent,
    ForumComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,ReactiveFormsModule,FormsModule],
    BarterRequestComponent,
    EventComponent,
    VenueComponent,
    ResponseComponent,
    FormComponent,

    AddFormComponent,
    EditFormComponent,
    DeleteFormComponent,
    ViewFormComponent,
    AddBarterComponent,
    EditBarterComponent,
    AddResponseComponent,
    EditResponseComponent,
    EditVenueComponent,
    EditEventComponent,
    AddVenueComponent,
    AddEventComponent,
    AddCategoryComponent,
    CategoryComponent,
    AddannonceComponent,
    AnnonceComponent,
    EditAnnonceComponent,
    EditcategoryComponent
      ],
  imports: [
    BrowserModule,CommonModule,
    AppRoutingModule  ,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
