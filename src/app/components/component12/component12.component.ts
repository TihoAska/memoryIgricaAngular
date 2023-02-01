import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component12',
  templateUrl: './component12.component.html',
  styleUrls: ['./component12.component.scss']
})
export class Component12Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("12. komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
