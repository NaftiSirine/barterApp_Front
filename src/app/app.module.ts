import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './back/header/header.component';
import { LayoutComponent } from './back/layout/layout.component';
<<<<<<< Updated upstream
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { ForumComponent } from './back/forum/forum.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    RegisterComponent,
    LogInComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,ReactiveFormsModule,FormsModule],
  providers: [],
<<<<<<< Updated upstream
  bootstrap: [AppComponent],
=======
  bootstrap: [AppComponent,ForumComponent]
>>>>>>> Stashed changes
})
export class AppModule {}
