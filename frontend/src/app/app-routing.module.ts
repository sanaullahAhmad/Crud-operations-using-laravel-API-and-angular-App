import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesIndexComponent }   from './countries/countries-index/countries-index.component';
import { CountriesAddComponent }   from './countries/countries-add/countries-add.component';
import { CountriesUpdateComponent }   from './countries/countries-update/countries-update.component';

import { CitiesIndexComponent }   from './cities/cities-index/cities-index.component';
import { CitiesAddComponent }   from './cities/cities-add/cities-add.component';
import { CitiesUpdateComponent }   from './cities/cities-update/cities-update.component';

import { ProductsIndexComponent }   from './products/products-index/products-index.component';
import { ProductsAddComponent }   from './products/products-add/products-add.component';
import { ProductsUpdateComponent }   from './products/products-update/products-update.component';

import { LoginComponent }   from './login/login.component';
import { LogoutComponent }   from './logout/logout.component';
import { RegisterComponent }   from './register/register.component';
import { PublicGuard, ProtectedGuard } from 'ngx-auth';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/countries', 
    pathMatch: 'full' 
  },
  {
    path: 'countries',
    canActivate: [ ProtectedGuard ],
    component: CountriesIndexComponent 
  },
  { path: 'countries/add', canActivate: [ ProtectedGuard ], component: CountriesAddComponent },
  { path: 'countries/update/:id', canActivate: [ ProtectedGuard ], component: CountriesUpdateComponent },
  
  {
    path: 'cities',
    canActivate: [ ProtectedGuard ],
    component: CitiesIndexComponent 
  },
  { path: 'cities/add', canActivate: [ ProtectedGuard ], component: CitiesAddComponent },
  { path: 'cities/update/:id', canActivate: [ ProtectedGuard ], component: CitiesUpdateComponent },

  {
    path: 'products',
    canActivate: [ ProtectedGuard ],
    component: ProductsIndexComponent 
  },
  { path: 'products/add', canActivate: [ ProtectedGuard ], component: ProductsAddComponent },
  { path: 'products/update/:id', canActivate: [ ProtectedGuard ], component: ProductsUpdateComponent },
  
  { path: 'login', canActivate: [ PublicGuard ], component: LoginComponent },
  { path: 'logout', canActivate: [ ProtectedGuard ], component: LogoutComponent },
  { path: 'register', canActivate: [ PublicGuard ], component: RegisterComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' } // catch any unfound routes and redirect to home page
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}