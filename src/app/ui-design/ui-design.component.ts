import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-design',
  templateUrl: './ui-design.component.html',
  styleUrls: ['./ui-design.component.css']
})
export class UiDesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inView(ele:any){
    ele.scrollIntoView({ behavior:"smooth", block:"start", inline:"start"   })
  }


}
