import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamsService } from './../../services/teams.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;

  snackMsgSuffix: string = ' was updated.';

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private TeamsService: TeamsService,
    private snackBar: MatSnackBar
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.getId);
    this.TeamsService.GetTeam(this.getId).subscribe(res => {
      this.updateForm.setValue({
        TeamName: res['TeamName']
      });
    });
    this.updateForm = this.formBuilder.group({
      TeamName: ['']
    })
  }

  showSnackbar(message: string) {
    message = message + this.snackMsgSuffix;
    this.snackBar.open(message, "Ok");
  }


  ngOnInit() { }
  onUpdate(): any {
    this.TeamsService.UpdateTeam(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/teams'))
      }, (err) => {
        console.log(err);
    });
  }
}
