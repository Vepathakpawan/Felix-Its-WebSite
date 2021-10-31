import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-android-instructor',
  templateUrl: './android-instructor.component.html',
  styleUrls: ['./android-instructor.component.css']
})
export class AndroidInstructorComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}