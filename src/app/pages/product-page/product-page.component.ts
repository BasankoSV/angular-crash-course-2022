import { Component, OnInit } from '@angular/core';
import {ProductsServices} from "../../services/products.services";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title = 'angular app'
  // products: IProduct[] = []
  // products$: Observable<IProduct[]> при добавлении нового элемента, отображать в нашем списке, добавили локальный products в сервисе
  loading = false
  term = ''

  constructor(
    public productsService: ProductsServices,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false )
    // )  смотри камментарий выше

    this.productsService.getAll().subscribe(products => {
      // this.products = products
      this.loading = false
    }) // применяем другой подход: products$: Observable<IProduct[]>, потом снова поменяли
  }
}
