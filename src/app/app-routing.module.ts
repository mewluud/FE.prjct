import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarComponent } from './Car/Car.component';
import { ProfileComponent } from './Profile/Profile.component';
import {HomeComponent} from './home/home.component';
import {HelpComponent} from './help/help.component';
import {SupportComponent} from './support/support.component';
import { authGuard } from './auth.guard';
import {AboutUsComponent} from "./about-us/about-us.component";
import {CarEditComponent} from "./car-edit/car-edit.component";
import {PagesComponent} from "./pages/pages.component";
import {CarFormComponent} from "./pages/components/car-form/car-form.component";
import {CarListComponent} from "./pages/components/car-list/car-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'car', component: CarComponent, canActivate: [authGuard]},
  { path: 'Profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'help', component:  HelpComponent },
  { path: 'support', component:  SupportComponent },
  { path: 'about-us', component:  AboutUsComponent },
  { path: 'car-edit', component: CarEditComponent},
  { path: '**', redirectTo: '/login' },
  { path: 'pages', component: PagesComponent, children: [
    { path: 'car-form', component: CarFormComponent},
    { path: 'car-list', component: CarListComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
