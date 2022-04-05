import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AssessComponent } from './assess/assess.component';
import { BuildComponent } from './build/build.component';
import { SprintsComponent } from './sprints/sprints.component';
import { BacklogComponent } from './backlog/backlog.component';
import { OnesComponent } from './ones/ones.component';
import { InviteComponent } from './invite/invite.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'assess', component: AssessComponent },
  { path: 'build', component: BuildComponent },
  { path: 'sprints', component: SprintsComponent },
  { path: 'backlog', component: BacklogComponent },
  { path: 'ones', component: OnesComponent },
  { path: 'invite', component: InviteComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
