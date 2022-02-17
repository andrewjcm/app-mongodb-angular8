import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products: Product[];
  empty: boolean = true;

  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.ps.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      if (this.products.length > 0) {
        this.empty = false;
      }
      console.log(this.products);
    });
  }

  deleteProduct(id: any) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.products.splice(id, 1);
    });
  }

}
