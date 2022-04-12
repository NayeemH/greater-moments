import { Component, ViewChild, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator   } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['UserID', 'UserName', 'UserSurname', 'UserEmail', '_id', 'Actions'];
  dataSource:any = [];
  Users:any = [];

  constructor(private UsersService: UsersService, private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort, { static: false}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.UsersService.GetUsers().subscribe(res => {
      this.Users = res;
      this.dataSource = res;
      this.dataSource = new MatTableDataSource(this.Users);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  delete(id:any, i:any) {
    if(window.confirm('Do you want to go ahead?')) {
      this.UsersService.DeleteUser(id).subscribe((res) => {
        this.Users.splice(i, 1);
      })
    }
  }

}
