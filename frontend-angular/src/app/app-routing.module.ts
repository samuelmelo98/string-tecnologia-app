import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import {UserListComponent} from "./pages/user-list/user-list.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainLayoutComponent,
    children:[
      { path: 'users', component: UserListComponent }
    ]
  },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
