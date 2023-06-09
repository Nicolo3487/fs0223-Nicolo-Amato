import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard'; 
import { DashboardComponent } from './pages/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  { path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: 'dash',
    component: DashboardComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
