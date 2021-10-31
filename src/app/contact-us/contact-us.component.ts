import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let loader= new Loader({
      apiKey:'AIzaSyC3hiq2QCdP1HAT--Us3_5TyCd1SSnzLg4'
    })
    loader.load().then(()=>{
new google.maps.Map (document.getElementById("map")as HTMLDivElement,{
  center: {lat:18.5204 , lng:73.8567},
  zoom:6,
})
    })
    }
}
