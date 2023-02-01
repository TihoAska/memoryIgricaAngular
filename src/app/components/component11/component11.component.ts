import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component11',
  templateUrl: './component11.component.html',
  styleUrls: ['./component11.component.scss']
})
export class Component11Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("11. komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
