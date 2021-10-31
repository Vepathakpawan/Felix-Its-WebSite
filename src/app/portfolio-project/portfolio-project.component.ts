import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.css']
})
export class PortfolioProjectComponent implements OnInit {

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
