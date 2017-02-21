import { Component } from '@angular/core';


@Component({
  selector: 'page-jumper',
  templateUrl: 'jumper.html'
})
export class JumperPage {
  personname :string;
  nameEntered :boolean;
  replyText : string;
  jumpercolour : string;
  colorRnd:number;
  constructor() {
        this.nameEntered=false;
        this.replyText ="";
  }

  logForm(personname:string)
  {
      this.colorRnd = Math.floor(Math.random() * 2) + 1 
      if (this.colorRnd == 1)
      {
      this.jumpercolour = "blue";
      }
      else
      {
          this.jumpercolour = "green";
      }
      this.replyText = "Hello " + this.personname + ", wear your " + this.jumpercolour + " jumper today."
  }
  
  reset(){
      this.replyText = null;
  }

}
