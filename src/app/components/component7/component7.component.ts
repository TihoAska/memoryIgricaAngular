import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component7',
  templateUrl: './component7.component.html',
  styleUrls: ['./component7.component.scss']
})
export class Component7Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("Sedma komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
