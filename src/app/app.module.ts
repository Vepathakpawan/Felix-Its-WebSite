import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PlacementComponent } from './placement/placement.component';
import { AboutComponent } from './about/about.component';
import { JoinusComponent } from './joinus/joinus.component';
import { UiUxDesignComponent } from './ui-ux-design/ui-ux-design.component';
import { UIUXProgramDetailsComponent } from './ui-ux-program-details/ui-ux-program-details.component';
import { DesignToolCourseComponent } from './design-tool-course/design-tool-course.component';
import { DesignToolWorkshopComponent } from './design-tool-workshop/design-tool-workshop.component';
import { AttendFreeWebinarComponent } from './attend-free-webinar/attend-free-webinar.component';
import { CardScrollerComponent } from './card-scroller/card-scroller.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { UiDesignComponent } from './ui-design/ui-design.component';
import { UIDesignProgramComponent } from './ui-design-program/ui-design-program.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { IosComponent } from './career/ios/ios.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { CardDisplayComponent } from './card-display/card-display.component';
// import { CardScrollDirective } from './card-scroll.directive';
import { JobGuranteeCardSliderComponent } from './job-gurantee-card-slider/job-gurantee-card-slider.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AndroidInstructorComponent } from './career/android-instructor/android-instructor.component';
// For MDB Angular Free

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    PlacementComponent,
    JoinusComponent,
    UiUxDesignComponent,
    UIUXProgramDetailsComponent,
    DesignToolCourseComponent,
    DesignToolWorkshopComponent,
    AttendFreeWebinarComponent,
    CardScrollerComponent,
    KnowMoreComponent,
    UiDesignComponent,
    UIDesignProgramComponent,
    ContactUsComponent,
    CareerComponent,
    IosComponent,
    CardSliderComponent,
    PortfolioProjectComponent,
    CardDisplayComponent,
    // CardScrollDirective,
    JobGuranteeCardSliderComponent,
    GoogleMapComponent,
    AndroidInstructorComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCardModule
  ],
  entryComponents: [IosComponent, AndroidInstructorComponent],
  exports: [
    IosComponent,MatSidenavModule, AndroidInstructorComponent
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],

})
export class AppModule { }
