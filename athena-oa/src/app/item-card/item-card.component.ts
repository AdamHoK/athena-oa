import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/models/IProduct';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit{
  
  @Input() product: IProduct | undefined;
  
  starRating: number = 0;

  whichStar(rating: number) {
    if(rating === 100){
      return 'ionStar';
    }
    else if(rating > 49){
      return 'ionStarHalf';
    }
    return 'ionStarOutline';
  }

  ngOnInit(): void {
    this.product ? this.starRating = this.product?.rating : this.starRating = 0;
  }
}
