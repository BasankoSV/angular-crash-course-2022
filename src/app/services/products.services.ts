import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {IProduct} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsServices {
  constructor(private http: HttpClient) {}

  getAll():Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams().append('limit', 5) // 'https://fakestoreapi.com/products?limit=5' - без params тоже работает
      // params: new HttpParams({ fromString: 'limit=5'})
      // params: new HttpParams({ fromObject: { limit: 5}})
    }).pipe(
      delay(2000)
    )
  }
}
