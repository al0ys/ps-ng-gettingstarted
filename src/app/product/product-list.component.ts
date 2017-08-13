import { Component } from '@angular/core';


@Component({
  selector: 'app-product',
  moduleId : module.id,
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})

export class ProductListComponent  {
  pageTitle = 'Product List';
}
