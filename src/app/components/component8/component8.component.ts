import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component8',
  templateUrl: './component8.component.html',
  styleUrls: ['./component8.component.scss']
})
export class Component8Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("Osma komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
