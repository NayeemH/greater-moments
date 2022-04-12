import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { OrganisationsComponent } from './admin/organisations/organisations.component';
import { QuestionnairesComponent } from './admin/questionnaires/questionnaires.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssessComponent } from './assess/assess.component';
import { BuildComponent } from './build/build.component';
import { SprintsComponent } from './sprints/sprints.component';
import { BacklogComponent } from './backlog/backlog.component';
import { OnesComponent } from './ones/ones.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { InviteComponent } from './invite/invite.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/organisations', component: OrganisationsComponent },
  { path: 'admin/questionnaires', component: QuestionnairesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'assess', component: AssessComponent },
  { path: 'build', component: BuildComponent },
  { path: 'sprints', component: SprintsComponent },
  { path: 'backlog', component: BacklogComponent },
  { path: 'ones', component: OnesComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/:id', component: TeamDetailComponent },
  { path: 'invite', component: InviteComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
