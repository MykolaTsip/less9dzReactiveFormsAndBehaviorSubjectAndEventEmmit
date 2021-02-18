import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  num = 0;
  grt = '';

  @Output()
  Newemit = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }



  save(grt: string) {
this.Newemit.emit(grt);
  }
}
