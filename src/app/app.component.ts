import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {ProductsServices} from "./services/products.services";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular app'
  // products: IProduct[] = []
  products$: Observable<IProduct[]>
  loading = false
  term = ''

  constructor(private productsService: ProductsServices) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false )
    )
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products
    //   this.loading = false
    // }) применяем другой подход: products$: Observable<IProduct[]>
  }
}
