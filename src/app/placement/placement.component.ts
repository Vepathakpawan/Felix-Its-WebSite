import { Component, OnInit } from '@angular/core';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@Component({
  selector: 'app-placement,ng-if-else',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']

})
export class PlacementComponent implements OnInit {

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

  projectcount:number = 0;
  //same process
  accuratecount:number = 0;
  clientcount:number = 0;
  customerfeedback:number = 0;

  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectcountstop.
  projectcountstop:any = setInterval(()=>{
    this.projectcount++;
    //we need to stop this at  particular point; will use if condition
    if(this.projectcount ==12)
    {
      //clearinterval will stop tha function
      clearInterval(this.projectcountstop);
    }

  },500) //10 is milisecond you can control it


  accuratecountstop:any = setInterval(()=>{
    this.accuratecount++;
    if(this.accuratecount == 40)
    {
      
      clearInterval(this.accuratecountstop);
    }
  },200) 


  clientcountstop:any = setInterval(()=>{
    this.clientcount++;
    if(this.clientcount == 750)
    {
      
      clearInterval(this.clientcountstop);
    }
  },10)

  customerfeedbackstop:any = setInterval(()=>{
    this.customerfeedback++;
    if(this.customerfeedback == 5)
    {
      
      clearInterval(this.customerfeedbackstop);
    }
  },1000)

  
  //conclusion: we have use
  //string interpolation
  //setInterval function
  //()=> arrow function
  //clearInterval 
  //creating variable


}




