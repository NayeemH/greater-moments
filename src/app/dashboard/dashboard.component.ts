import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Teams:any = [];
  constructor(private TeamsService: TeamsService) { }
  ngOnInit(): void {
    this.TeamsService.GetTeams().subscribe(res => {
      this.Teams =res;
      console.log(this.Teams);
    });
  }
}
