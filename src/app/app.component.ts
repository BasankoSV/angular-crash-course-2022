import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {ProductsServices} from "./services/products.services";
import {Observable, tap} from "rxjs";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
