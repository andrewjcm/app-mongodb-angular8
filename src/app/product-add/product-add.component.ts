import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private ps: ProductsService) { this.createForm(); }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    });
  }

  addProduct(ProductName: string, ProductDescription: string, ProductPrice: number) {
    this.ps.addProduct(ProductName, ProductDescription, ProductPrice);
    this.router.navigate(['products']);
  }

}
