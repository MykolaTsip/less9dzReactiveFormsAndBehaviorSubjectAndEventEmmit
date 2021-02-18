import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {DataTransferService} from '../../data-transfer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  user: User;

  constructor(private dataTransferService: DataTransferService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.dataTransferService.getUserWithDataTransfer();
  };

}
