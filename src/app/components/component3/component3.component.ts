import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("Treca komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
