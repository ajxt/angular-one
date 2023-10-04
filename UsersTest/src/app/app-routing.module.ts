import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersSelectComponent } from './users-select/users-select.component';

const routes: Routes = [
  {
    path: '',
    component: UsersSelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
