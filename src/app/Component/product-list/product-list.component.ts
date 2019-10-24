import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Shared/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   p = 1;
   searchText: any;

    products: Product[];

   constructor(private productService: ProductService) { }

   ngOnInit() {
 //  this.productService.findAll().subscribe(data => {this.products = data; });

    this.products = this.productService.findAll();
   }
}
