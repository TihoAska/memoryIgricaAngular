import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component6',
  templateUrl: './component6.component.html',
  styleUrls: ['./component6.component.scss']
})
export class Component6Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("Sesta komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
