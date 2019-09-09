import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {

  id: string;
  userToEdit: any

  constructor(
    private route: ActivatedRoute,
    private customersServive: CustomersService) { }

  getUser(){
    this.userToEdit = this.customersServive.getCustomer()
    console.log(this.userToEdit)
  }  

  ngOnInit() {
    this.route.paramMap
      .subscribe( param => {
        console.log(param)
        this.id = param.get("id")
    })

    this.getUser()
  }

}
