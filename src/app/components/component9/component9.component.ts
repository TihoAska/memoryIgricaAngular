import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component9',
  templateUrl: './component9.component.html',
  styleUrls: ['./component9.component.scss']
})
export class Component9Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("Deveta komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
