import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';

import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})

export class TeamsComponent implements OnInit {

  Teams:any = [];
  constructor(private TeamsService: TeamsService) { }
  ngOnInit(): void {
    this.TeamsService.GetTeams().subscribe(res => {
      this.Teams =res;
      console.log(this.Teams);
    });
  }

  delete(id:any, i:any) {
    if(window.confirm('Do you want to go ahead?')) {
      this.TeamsService.DeleteTeam(id).subscribe((res) => {
        this.Teams.splice(i, 1);
      })
    }
  }

}
