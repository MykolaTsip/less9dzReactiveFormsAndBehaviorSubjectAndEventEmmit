import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from './models/User';
import {DataTransferService} from './data-transfer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'less9dzReactiveFormsAndBehaviorSubjectAndEventEmmit';
  num: number;

  userForm: FormGroup;

  user: User = {login: '', password: ''};

  constructor(private router: Router, private dataTransferService: DataTransferService) {
    this.userForm = new FormGroup({
      password: new FormControl('', Validators.required),
      login: new FormControl('', [Validators.required])
    });
  }

  save(userForm: FormGroup) {
    this.user.login = userForm.controls.login.value;
    this.user.password = userForm.controls.password.value;

    console.log(this.user);
    this.dataTransferService.createUserInDataTransfer(this.user);
    console.log(this.dataTransferService.getUserWithDataTransfer());
  }

  changeTitle($event: string): void {
    this.title = $event;
  }

  number($event: any): void {
    this.num = $event;
  }



}

