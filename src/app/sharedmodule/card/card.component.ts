import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public profileDetails;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  action(i, action) {
    let obj = { index: i, action: action };
    this.valueChange.emit(obj);
  }

}
