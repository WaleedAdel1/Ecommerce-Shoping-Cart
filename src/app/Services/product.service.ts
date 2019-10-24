import { Product } from 'src/app/Shared/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartService, BaseCartItem } from 'ng-shopping-cart';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private products: Product[];

  constructor(
    // private httpClient: HttpClient
    ) {
    this.products = [
      { id: '1', name: 'Cake 1', price: 300, photo: '../../assets/Images/cake-1.jpeg' },
      { id: '2', name: 'Cake 2', price: 250, photo: '../../assets/Images/cake-2.jpeg' },
      { id: '3', name: 'Cake 3', price: 400, photo: '../../assets/Images/cake-3.jpeg' },
      { id: '4', name: 'Cupcake 1', price: 220, photo: '../../assets/Images/cupcake-1.jpeg' },
      { id: '5', name: 'Cupcake 2', price: 500, photo: '../../assets/Images/cupcake-2.jpeg' },
      { id: '6', name: 'Cupcake 3', price: 150, photo: '../../assets/Images/cupcake-3.jpeg' },
      { id: '7', name: 'Doughnut 1', price: 450, photo: '../../assets/Images/doughnut-1.jpeg' },
      { id: '8', name: 'Doughnut 2', price: 600, photo: '../../assets/Images/doughnut-2.jpeg' },
      { id: '9', name: 'Doughnut 3', price: 800, photo: '../../assets/Images/doughnut-3.jpeg' },
    ];
  }

  // findAll(): Observable<Product[]> {
  //    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  //  }
  findAll(): Product[] {
      return this.products;
  }


  find(id: string): Product {
      return this.products[this.getSelectedIndex(id)];
  }

    private getSelectedIndex(id: string) {
      for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === id) {
              return i;
          }
      }
      return -1;
  }

}
