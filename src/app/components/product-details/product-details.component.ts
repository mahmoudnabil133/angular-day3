import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { IProduct } from '../products/IProduct';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, NgFor],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;

  constructor(private productServ: ProductsService, private route: ActivatedRoute) {}
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.productServ.getProductById(id).subscribe((response) => {
      console.log(response);
      this.product = response;
      console.log(this.product);
    });
  }
}
