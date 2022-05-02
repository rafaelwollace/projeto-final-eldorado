import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  { path: 'category', redirectTo: 'category/index', pathMatch: 'full'},
  { path: 'category/index', component: IndexComponent ,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
