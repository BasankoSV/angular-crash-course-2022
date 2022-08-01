import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {IProduct} from "../models/product";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsServices {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
    ) {}

  products: IProduct[] = []

  getAll():Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams().append('limit', 5) // 'https://fakestoreapi.com/products?limit=5' - без params тоже работает
      // params: new HttpParams({ fromString: 'limit=5'})
      // params: new HttpParams({ fromObject: { limit: 5}})
    }).pipe(
      delay(2000), // ставим задержку, чтоб увидеть сообщение о загрузке данных
      retry(2), // повторяем запрос два раза
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this))
    )
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(
        tap( prod => this.products.push(prod))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() =>  error.message)
  }
}
