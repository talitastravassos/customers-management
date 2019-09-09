import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CustomersService } from 'src/app/services/customers.service';
export interface UserData {
  id: number;
  name: string;
  city: string;
  age: string;
}
@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.sass']
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'city', 'age'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  customersList: UserData[] = []

  constructor(private customersServive: CustomersService) { 
    this.customersServive.getCustomersList()
    .subscribe( (res: any) => {
      this.customersList = res
      this.dataSource = new MatTableDataSource(this.customersList);
      console.log(res)
    })

  
  console.log(this.dataSource)
  }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
