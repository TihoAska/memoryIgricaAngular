import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'memory';
  redColour = "assets/RedColour.png";
  showCount = 0;
  points = 0;
  text = " ";
  correctCount = 0;

  playAgain(){
    location.reload();
  }

  show = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  clicked = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  correct = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  slike = [
    "assets/Banana.jpg",
    "assets/Banana.jpg",

    "assets/Cheems.png",
    "assets/Cheems.png",

    "assets/ConfusedCat.jpg",
    "assets/ConfusedCat.jpg",

    "assets/EricCartman.png",
    "assets/EricCartman.png",

    "assets/EvilKermit.jpg",
    "assets/EvilKermit.jpg",

    "assets/IceCream.png",
    "assets/IceCream.png",

    "assets/NerdEmoji.png",
    "assets/NerdEmoji.png",

    "assets/USSRdog.jpg",
    "assets/USSRdog.jpg"
  ];

  memory : string[] = [];

  constructor(){

    this.slike.sort(()=> Math.random() - 0.5);
  
    for (let i = 0; i < this.slike.length; i++) {
      this.memory[i] = this.slike[i]; 
      this.text = "Get ready!";
    }

    for (let i = 0; i < this.slike.length; i++) {
      setTimeout(()=>{
        this.memory[i] = this.redColour; 
      }, 1000); 

      
    }
    setTimeout(()=>{
      this.text = "Play!";
    }, 1000); 

    setTimeout(()=>{
      this.text = " ";
    }, 2000); 

    for (let i = 0; i < this.slike.length; i++){
      console.log(this.slike[i]);
    }
  }

  check(){
    console.log("Show count: " + this.showCount);
    if(this.showCount == 2)
    {
      this.showCount = 0;
      
      for(let i = 0; i<this.memory.length; i++)
      {
        if((this.clicked[i] == true) && (this.correct[i] == false))
        {
          console.log("i: " + i);

          for (let j = 0; j<this.memory.length; j++)
          {
            if(i!=j)
            {
              if((this.clicked[j] == true) && (this.correct[j] == false))
              {
                console.log("j: " + j);

                if(this.memory[i] == this.memory[j])
                {
                  console.log("Jednaki su!");
                  this.correct[i] = true;
                  this.correct[j] = true;
                  this.points++;
                  this.correctCount++;
                  console.log("Correct count: " + this.correctCount);
                  if(this.correctCount == 8){
                    this.text = "gg";
                  }
                  return;
                }
                else 
                {
                  console.log("Nisu jednaki!");
                  setTimeout(()=>{
                    this.clicked[i] = false;
                    this.clicked[j] = false;
                    this.show[i] = false;
                    this.show[j] = false;
                    this.memory[i] = this.redColour;
                    this.memory[j] = this.redColour;
                  }, 1000);   
                  this.points--; 
                  return;
                }
              }
            }
          }
        }
      }
    }
  }

  klik(i : number){
    this.show[i] = !this.show[i];

    if(this.correct[i] != true)
    {
      if(this.show[i] == true)
      {
        this.showCount++;
        this.clicked[i] = true;
        this.memory[i] = this.slike[i];
      }
      else
      {
        this.showCount--;
        if(this.showCount<0){
          this.showCount = 0;
        }
        this.clicked[i] = false;
        this.memory[i] = this.redColour;
      }
    }
  }
}