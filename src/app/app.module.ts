import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from "@angular/fire/compat";
import { environment } from 'src/environments/environment.development';
import { AngularFirestoreModule} from "@angular/fire/compat/firestore";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { CarComponent } from './Car/Car.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';
import { UtilService } from './services/util.service';
import { RefsService } from './services/refs.service';
import { StateManagerService } from './services/state-manager.service';
import { OutputTableComponent } from './output-table/output-table-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { DangerMessageComponent } from './danger-message/danger-message.component';
import { ProfileComponent } from './Profile/Profile.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { SupportComponent } from './support/support.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import {PagesModule} from "./pages/pages.module";


@NgModule({
  declarations: [CarComponent,
    NavbarComponent,
    SidebarComponent,
    AppComponent,
    TableComponent,
    SearchComponent,
    OutputTableComponent,
    ProfileComponent,
    HomeComponent,
    AboutUsComponent,
    HelpComponent,
    SupportComponent,
    CarEditComponent,
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginComponent,
    BrowserAnimationsModule,
    SuccessMessageComponent,
    DangerMessageComponent,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    PagesModule,
  ],
  providers: [AuthService, AuthGuard, UtilService,RefsService,StateManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
