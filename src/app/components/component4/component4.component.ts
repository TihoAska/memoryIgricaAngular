import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.scss']
})
export class Component4Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("Cetvrta komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
