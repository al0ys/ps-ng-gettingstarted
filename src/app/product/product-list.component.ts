import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product',
  moduleId: module.id,
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})

export class ProductListComponent  implements OnInit  {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  listFilter = 'Leaf';
  showImage = false;
  products: IProduct[] = [];
  errorMessage: string;

  constructor(private _productService: ProductService) {

  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
    // console.log(`This rating ${message} was shown in the parent component`);
  }

  ngOnInit(): void {
    this._productService.getProducts()
            .subscribe(products => this.products = products,
                        error => this.errorMessage = <any>error);

    console.log(' In OnInit');
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }


}
