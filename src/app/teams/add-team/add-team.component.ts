import { Component, Inject, OnInit, Optional, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from '../../services/teams.service';
import { FormGroup, FormBuilder, FormControl, NgForm, Validators } from "@angular/forms";

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})

export class AddTeamComponent implements OnInit {

  fromDialog!: string;
  teamForm: FormGroup


  snackMsgSuffix: string = ' was created.';

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private snackBar: MatSnackBar,
    private TeamsService: TeamsService,
    public dialogRef: MatDialogRef<AddTeamComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public mydata: any
  ) {
    this.teamForm = this.formBuilder.group({
      TeamName: ['']
    })
  }

  showSnackbar(message: string) {
    message = message + this.snackMsgSuffix;
    this.snackBar.open(message, "Ok");
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    // check if form fields are valid
    if(this.teamForm.valid) {
      // submit form data to DB vai TeamsService
      this.TeamsService.AddTeam(this.teamForm.value)
      .subscribe(() => {
          // this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
          // close dialog
          this.closeDialog();
        }, (err) => {
          console.log(err);
      });
    }
  }

  closeDialog() { this.dialogRef.close(); }

}
