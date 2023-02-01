import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component15',
  templateUrl: './component15.component.html',
  styleUrls: ['./component15.component.scss']
})
export class Component15Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("15. komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
