// import { Directive, ElementRef, HostListener} from "@angular/core";

// @Directive({
//   selector: '[appCardScroll]'
// })
// export class CardScrollDirective {
//   private initPointX: number =0;
//   private initPointY: number = 0;

//   constructor(private ele: ElementRef) {
// }


// @HostListener('mousewheel', ['$event'])
// scroll(event: MouseEvent) {
//     console.log("event.pageX");
//     let wheelDelta = Math.max(-1, Math.min(1, (event.pageX|| -event.detail)) );
//     if(wheelDelta > 10) {
//       const factor = 0.10;
//     }else {
//      const factor = 20.0;
//     }

//     this.initPointX = event.pageX;
//     this.initPointY = event.pageY;   
// } 
// }