import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component5',
  templateUrl: './component5.component.html',
  styleUrls: ['./component5.component.scss']
})
export class Component5Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("Peta komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
