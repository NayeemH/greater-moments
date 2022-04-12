import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssessComponent } from './assess/assess.component';
import { BuildComponent } from './build/build.component';
import { SprintsComponent } from './sprints/sprints.component';
import { BacklogComponent } from './backlog/backlog.component';
import { OnesComponent } from './ones/ones.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InviteComponent } from './invite/invite.component';
import { TeamsComponent } from './teams/teams.component';
import { AddTeamComponent } from './teams/add-team/add-team.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { QuestionnairesComponent } from './admin/questionnaires/questionnaires.component';
import { OrganisationsComponent } from './admin/organisations/organisations.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AssessComponent,
    BuildComponent,
    SprintsComponent,
    BacklogComponent,
    OnesComponent,
    PageNotFoundComponent,
    InviteComponent,
    TeamsComponent,
    AddTeamComponent,
    TeamDetailComponent,
    AdminComponent,
    UsersComponent,
    QuestionnairesComponent,
    OrganisationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
