import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component14',
  templateUrl: './component14.component.html',
  styleUrls: ['./component14.component.scss']
})
export class Component14Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("14. komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
