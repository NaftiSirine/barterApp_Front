import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './back/header/header.component';
import { LayoutComponent } from './back/layout/layout.component';
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
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    BarterRequestComponent,
    EventComponent,
    VenueComponent,
    ResponseComponent,
    FormComponent,
    AddFormComponent,
    EditFormComponent,
    DeleteFormComponent,
    ViewFormComponent,
      ],
  imports: [
    BrowserModule,CommonModule,
    AppRoutingModule  ,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
