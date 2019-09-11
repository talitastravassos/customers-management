import { User } from 'src/app/models/user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {

  id: string
  userToEdit: User
  editForm: FormGroup

  constructor(
    private activateRoute: ActivatedRoute,
    private route: Router,
    private customersServive: CustomersService,
    private formBuilder: FormBuilder,
    private notification: NotificationsService) { }

  getUser() {
    this.userToEdit = this.customersServive.getCustomer() // get user to edit from localStorage
  }

  submit(user: User) {
    this.customersServive.putCustomer(this.id, user) // submit user data to update
      .subscribe(res => {
        // console.log(res)
        this.notification.successNotification(`Cliente ${user.name} atualizado com sucesso!`, "Sucesso!") //success notification
        this.route.navigate(['/'])
      })
  }

  /* Gets form field*/
  get name() {
    return this.editForm.get("name")
  }

  get city() {
    return this.editForm.get("city")
  }

  get age() {
    return this.editForm.get("age")
  }

  ngOnInit() {
    this.activateRoute.paramMap //get id from param
      .subscribe(param => {
        // console.log(param)
        this.id = param.get("id")
      })

    this.getUser()

    this.editForm = this.formBuilder.group({ //formbuild and validators
      name: [this.userToEdit.name, [
        Validators.required
      ]],
      city: [this.userToEdit.city, [
        Validators.required
      ]],
      age: [this.userToEdit.age,
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
        Validators.max(99),
        Validators.min(16)
      ]]
    })

    // console.log(this.editForm)
  }

}
