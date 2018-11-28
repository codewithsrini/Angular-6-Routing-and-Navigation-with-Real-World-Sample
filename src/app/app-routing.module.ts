import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { AuthGuard } from './auth/auth.guard';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  {
    path: 'projects',
    loadChildren: './project/project.module#ProjectModule'
    // Lazy Loading
  },
  {
    path: 'users',
    component: UsersComponent  
  },
  {
    path: 'dash',
    component: DashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/dash',
    pathMatch:'full'
  },
  {
    path: "**",
    component: FourZeroFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
