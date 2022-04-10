import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

import { TeamsService } from './services/teams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'greater-moment';

  Teams:any = [];
  constructor(private TeamsService: TeamsService) { }
  ngOnInit(): void {
    this.TeamsService.GetTeams().subscribe(res => {
      this.Teams = res;
    });
  }
}
