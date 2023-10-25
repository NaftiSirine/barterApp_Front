import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFrontComponent } from './front/layout-front/layout-front.component';
import { LayoutComponent } from './back/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  {
    path: 'back',
    component: LayoutComponent,
  },
  {
    path: 'front',
    component: LayoutFrontComponent,
    // Add more routes for the "front" section as needed
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
