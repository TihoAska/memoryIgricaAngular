import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component16',
  templateUrl: './component16.component.html',
  styleUrls: ['./component16.component.scss']
})
export class Component16Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("16. komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
