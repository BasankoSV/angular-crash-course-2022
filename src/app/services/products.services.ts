import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsServices {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('https://fakestoreapi.com/products')
  }
}
