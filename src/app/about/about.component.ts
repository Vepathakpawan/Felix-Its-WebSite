import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  showMe:boolean=false
  Hide:boolean=false
   ngOnInit(): void {
     // throw new Error('Method not implemented.');
   }
 
   toogleTag()
   {
     this.showMe= !this.showMe
     
   }
   toogleless()
   {
     this.Hide= !this.Hide
     
   }
}
