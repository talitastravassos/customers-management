import {Component, OnInit, ViewChild, HostListener} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.sass']
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'city', 'age', 'action']
  dataSource: MatTableDataSource<User>
  currentWindowWidth: number

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private customersServive: CustomersService) { }

  getUserToEdit(user: User){
    this.customersServive.setCustomer(user)
  }
  
  ngOnInit() {
    this.currentWindowWidth = window.innerWidth //get width of screen to change layout

    this.customersServive.getCustomersList()
    .subscribe( (res: any) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;  
      // console.log(this.dataSource)
    })

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  @HostListener('window:resize')
    onResize() {
      this.currentWindowWidth = window.innerWidth
      // console.log(this.currentWindowWidth)
    }
}
