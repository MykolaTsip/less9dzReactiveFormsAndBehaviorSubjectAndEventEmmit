import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {DataTransferService} from '../../data-transfer.service';

@Component({
  selector: 'app-beh',
  templateUrl: './beh.component.html',
  styleUrls: ['./beh.component.css']
})
export class BehComponent implements OnInit {

  beh: User;

  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
    this.beh = this.dataTransferService.getUserWithDataTransfer();
  }

}
