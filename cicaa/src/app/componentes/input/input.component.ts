import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() iclass: string;
  @Input() itype: string;
  @Input() iname: string;
  @Input() iid: string;
  @Input() ialt: string;
  @Input() iplace: string;  
  constructor() { }

  ngOnInit(): void {
  }

}
