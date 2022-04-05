import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

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

import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssessComponent } from './assess/assess.component';
import { BuildComponent } from './build/build.component';
import { SprintsComponent } from './sprints/sprints.component';
import { BacklogComponent } from './backlog/backlog.component';
import { OnesComponent } from './ones/ones.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InviteComponent } from './invite/invite.component';

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
    InviteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
