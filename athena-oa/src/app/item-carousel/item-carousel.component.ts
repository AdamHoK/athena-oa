import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/models/IProduct';
import { ProductInfoService } from '../shared/product-info.service';

@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.scss']
})
export class ItemCarouselComponent implements OnInit {
  
  products: IProduct[] = [];

  constructor(private productService: ProductInfoService){
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (v) => {
        (JSON.parse(JSON.stringify(v))).forEach((value: JSON) => {
          let product: IProduct = {
            name: '',
            price: 0.0,
            imageUrl: '',
            description: '',
            rating: 0.0
          };

          Object.assign(product, value)
          this.products.push(product);
        })
        
      }
    );
  }

}
