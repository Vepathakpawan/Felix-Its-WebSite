import { Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { IosComponent } from './ios/ios.component';
import { AndroidInstructorComponent} from './android-instructor/android-instructor.component';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  closeModal: string|any;
  constructor(private modalService: NgbModal) {}
    
  triggerModal() {
    // let modalRef = this.modalService.open(this.modalContent, {ariaLabelledBy: 'modal-basic-title',backdrop:'static',windowClass:'myCustomModalClass'});
    // modalRef.result.then((res) => {
    //   this.closeModal = `Closed with: ${res}`;
    // }, (res) => {
    //   this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    // })
    this.modalService.open(IosComponent);
  }
  AndroidModal() {
    // let modalRef = this.modalService.open(this.modalContent, {ariaLabelledBy: 'modal-basic-title',backdrop:'static',windowClass:'myCustomModalClass'});
    // modalRef.result.then((res) => {
    //   this.closeModal = `Closed with: ${res}`;
    // }, (res) => {
    //   this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    // })
    this.modalService.open(AndroidInstructorComponent);
  }

ngOnInit(){

}

}
