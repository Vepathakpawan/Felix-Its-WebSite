import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-ux-design',
  templateUrl: './ui-ux-design.component.html',
  styleUrls: ['./ui-ux-design.component.css']
})
export class UiUxDesignComponent implements OnInit {

  showMe:boolean=false
  Hide:boolean=false
   ngOnInit(): void {
     // throw new Error('Method not implemented.');
   }
 
   inView(ele:any){
     ele.scrollIntoView({ behavior:"smooth", block:"start", inline:"start"   })
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
