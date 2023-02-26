import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemCarouselComponent } from './item-carousel/item-carousel.component';
import { NgIconsModule } from '@ng-icons/core';
import { ionStar, ionStarHalf, ionStarOutline } from '@ng-icons/ionicons'
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ItemCarouselComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgIconsModule.withIcons({ionStar, ionStarHalf, ionStarOutline})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
