import { BrowserModule } from '@angular/platform-browser';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {
  @Input() slika : string = " ";
  @Output() onClick = new EventEmitter<string>();

  constructor(){
    console.log("Prva komponenta radi!");
  }

  showPhoto(){
    this.onClick.emit(this.slika);
  }
}
