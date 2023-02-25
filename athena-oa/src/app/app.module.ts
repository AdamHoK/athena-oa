import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemCarouselComponent } from './item-carousel/item-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ItemCarouselComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
