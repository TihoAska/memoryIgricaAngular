import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component10',
  templateUrl: './component10.component.html',
  styleUrls: ['./component10.component.scss']
})
export class Component10Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("Deseta komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
