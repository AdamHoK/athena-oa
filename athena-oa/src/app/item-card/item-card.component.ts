import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/models/IProduct';
import { ProductInfoService } from '../shared/product-info.service';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input() product: IProduct | undefined;
    
}
