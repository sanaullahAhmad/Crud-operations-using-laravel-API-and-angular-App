import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AlertModule } from 'ngx-bootstrap/alert'; 
import { AuthenticationModule } from './shared';
import { EnvironmentModule } from './shared';
import { FormValidationModule } from './shared';
import { NotificationModule } from './shared';

// Component
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { CountriesService } from "./countries/countries.service";
import { CountriesIndexComponent } from './countries/countries-index/countries-index.component';
import { CountriesAddComponent } from './countries/countries-add/countries-add.component';
import { CountriesUpdateComponent } from './countries/countries-update/countries-update.component';

import { CitiesService } from "./cities/cities.service";
import { CitiesIndexComponent } from './cities/cities-index/cities-index.component';
import { CitiesAddComponent } from './cities/cities-add/cities-add.component';
import { CitiesUpdateComponent } from './cities/cities-update/cities-update.component';

import { ProductsService } from "./products/products.service";
import { ProductsIndexComponent } from './products/products-index/products-index.component';
import { ProductsAddComponent } from './products/products-add/products-add.component';
import { ProductsUpdateComponent } from './products/products-update/products-update.component';

import { RegisterComponent } from './register/register.component';
import { RegisterService } from "./register/register.service";
import { LoginService } from "./login/login.service";
import { LogoutService } from "./logout/logout.service";
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { LogoutComponent } from './logout/logout.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CountriesIndexComponent,
    CountriesAddComponent,
    CountriesUpdateComponent,
    CitiesIndexComponent,
    CitiesAddComponent,
    CitiesUpdateComponent,
    ProductsIndexComponent,
    ProductsAddComponent,
    ProductsUpdateComponent,
    RegisterComponent,
    NavHeaderComponent,
    NavSidebarComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AuthenticationModule,
    EnvironmentModule,
    FormValidationModule,
    NotificationModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    AlertModule.forRoot(),
    SweetAlert2Module.forRoot(),
    NgxPaginationModule,
    AppRoutingModule,
    SnotifyModule,
    ModalModule.forRoot()
  ],
  providers: [
    CountriesService,
    CitiesService,
    ProductsService,
    RegisterService,
    LoginService,
    LogoutService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
