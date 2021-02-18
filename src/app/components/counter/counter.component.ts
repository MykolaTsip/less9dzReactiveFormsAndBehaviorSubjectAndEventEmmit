import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  num = 0;

  @Output()
  countEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  minus(): void {
    this.countEmit.emit(this.num--);

  }

  plus(): void {
    this.countEmit.emit(this.num++);
  }
}
