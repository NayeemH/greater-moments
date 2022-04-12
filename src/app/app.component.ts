import { Component, HostBinding, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';

import { TeamsService } from './services/teams.service';

import { AddTeamComponent } from './teams/add-team/add-team.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'greater-moment';
  Teams:any = [];

  constructor(private TeamsService: TeamsService, public dialog: MatDialog, private router: Router) {
    router.events.subscribe((res) => {
      if (router.url === '/admin') {

      }

    });
  }

  openAddTeamDialog() {
    const addTeamDialog = this.dialog.open(AddTeamComponent, {
      width: '330px'
    });
    addTeamDialog.afterClosed().subscribe((res) => {
      // Data back from dialog
    });
  }

  ngOnInit(): void {
    this.TeamsService.GetTeams().subscribe(res => {
      this.Teams = res;
    });
  }
}
