import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component13',
  templateUrl: './component13.component.html',
  styleUrls: ['./component13.component.scss']
})
export class Component13Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("13. komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
