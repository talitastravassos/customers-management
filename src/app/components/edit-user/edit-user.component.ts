import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {

  id: string
  userToEdit: any
  editForm: FormGroup

  constructor(
    private activateRoute: ActivatedRoute,
    private route: Router,
    private customersServive: CustomersService,
    private formBuilder: FormBuilder) { }

  getUser(){
    this.userToEdit = this.customersServive.getCustomer()
    console.log(this.userToEdit)
  }
  
  submit(user){
    this.customersServive.putCustomer(this.id, user)
      .subscribe( res => {
        console.log(res)
        this.route.navigate(['/'])
      })
  }

  ngOnInit() {
    this.activateRoute.paramMap
      .subscribe( param => {
        console.log(param)
        this.id = param.get("id")
    })

    this.getUser()

    this.editForm = this.formBuilder.group({
      name: this.userToEdit.name,
      city: this.userToEdit.city,
      age: this.userToEdit.age
    })

    // this.editForm.valueChanges.subscribe( console.log )
    // console.log(this.editForm)
  }

}
