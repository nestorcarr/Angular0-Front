import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/main/index/index.component';
import { DashboardComponent } from './componentes/dash/dashboard/dashboard.component';
import { ErrorComponent } from './componentes/main/error/error.component';
import { LogiinComponent } from './componentes/main/logiin/logiin.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', pathMatch: 'full', redirectTo: '/index'},
  {path: '**', component: ErrorComponent},
  {path: 'logiin', component: LogiinComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
