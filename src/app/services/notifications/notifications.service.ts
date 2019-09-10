import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService) { }

  //toast of success action
  successNotification(message: string, title: string) {
    this.toastr.success(message, title);
  }

  //toast of error action
  errorNotification(message: string, title: string){
    this.toastr.error(message, title);
  }
}
