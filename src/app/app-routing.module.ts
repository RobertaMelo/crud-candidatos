import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'list', 
    component: ListComponent 
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { 
    path: '**', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
