import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PlacementComponent } from './placement/placement.component';
import {AboutComponent } from './about/about.component';
import { JoinusComponent} from './joinus/joinus.component';
import { UiUxDesignComponent } from './ui-ux-design/ui-ux-design.component';
import{ UIUXProgramDetailsComponent} from './ui-ux-program-details/ui-ux-program-details.component';
import {  DesignToolCourseComponent} from './design-tool-course/design-tool-course.component';
import {DesignToolWorkshopComponent } from './design-tool-workshop/design-tool-workshop.component';
import { AttendFreeWebinarComponent } from './attend-free-webinar/attend-free-webinar.component';
import { CardScrollerComponent} from './card-scroller/card-scroller.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { UiDesignComponent} from './ui-design/ui-design.component';
import { UIDesignProgramComponent } from './ui-design-program/ui-design-program.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { CardSliderComponent} from './card-slider/card-slider.component';
import { PortfolioProjectComponent} from './portfolio-project/portfolio-project.component';
import { CardDisplayComponent} from './card-display/card-display.component';
import { JobGuranteeCardSliderComponent } from './job-gurantee-card-slider/job-gurantee-card-slider.component';
import { GoogleMapComponent } from './google-map/google-map.component';

const routes: Routes = [
  {path: '', redirectTo:'ui-ux-design', pathMatch:'full'},
  {path: 'nav', component: NavigationComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'placement', component: PlacementComponent},
  { path: 'about', component:AboutComponent},
  {path: 'Joinus' , component:JoinusComponent , pathMatch:'full'},
  { path: 'ui-ux-design' , component:UiUxDesignComponent},
  { path: 'ui-ux-program-details', component: UIUXProgramDetailsComponent},
  { path: 'design-tool', component: DesignToolCourseComponent},
  { path: 'design-workshop' , component:DesignToolWorkshopComponent },
  {path: 'attend-free-webinar', component:AttendFreeWebinarComponent},
  { path: 'card-scroller', component:CardScrollerComponent},
  {path:'know-more', component:KnowMoreComponent},
  {path:'ui-design',component:UiDesignComponent},
  {path:'ui-design-program',component: UIDesignProgramComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path:'career' , component:CareerComponent },
  { path:'card-slider' , component:CardSliderComponent},
  { path:'portfolio-project', component:PortfolioProjectComponent},
   { path:'card-display', component:CardDisplayComponent},
   {path:'job-cards',component:JobGuranteeCardSliderComponent} ,
   {path:'google-map', component: GoogleMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[PlacementComponent,
  UiUxDesignComponent,UIUXProgramDetailsComponent,DesignToolCourseComponent,
  DesignToolWorkshopComponent,AttendFreeWebinarComponent,CardScrollerComponent,KnowMoreComponent,
  UiDesignComponent, UIDesignProgramComponent, ContactUsComponent,CareerComponent,CardSliderComponent,
  PortfolioProjectComponent,CardDisplayComponent,JobGuranteeCardSliderComponent,GoogleMapComponent]
