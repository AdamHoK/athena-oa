import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions, CarouselComponent, SlidesOutputData } from 'ngx-owl-carousel-o';
import { IProduct } from 'src/models/IProduct';
import { ProductInfoService } from '../shared/product-info.service';

@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.scss']
})
export class ItemCarouselComponent implements OnInit {
  
  products: IProduct[] = [];
  customOptions: OwlOptions | undefined;
  mobile: boolean = false;
  isEnd: boolean = false;
  isStart: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event.currentTarget.innerWidth);

    this.mobile = event.currentTarget.innerWidth<765;
    this.refreshOptions();
  }

  constructor(private productService: ProductInfoService){
  }
  
  getData(data: SlidesOutputData){
    this.isStart = data.startPosition===0;
    this.isEnd = Number(data.slides?.pop()?.id.split("-").at(2)) === this.products.length;
    
  }

  refreshOptions(){
      this.customOptions = {
        margin: 20,
        loop: this.mobile,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 1000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          900: {
            items: 3
          }
        },
      }
    }


  ngOnInit(): void {

    this.mobile = window.innerWidth < 765;

    this.productService.getProducts().subscribe(
      (response) => {
        (JSON.parse(JSON.stringify(response))).forEach((value: JSON) => {
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

    setTimeout(() => this.refreshOptions(), 300);
    // Had to add a timeout here because otherwise owl-carousel would not be responsive
  }

}
