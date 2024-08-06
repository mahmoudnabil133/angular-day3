import { CommonModule, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { ProductsService } from '../../services/products.service';
import { IProduct } from './IProduct';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, MatBadgeModule, MatButtonModule, MatIconModule,
    NgClass,NgStyle
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  allProducts: IProduct[] = [];
  constructor(private productServ: ProductsService, private router: Router) {}
  // hook
  ngOnInit() {
    this.productServ.getAllProducts().subscribe((response) => {
      // console.log(response.results);
      this.allProducts=response
    });
  }
  viewProductDetails(id: number):void {
    this.router.navigate(['/products', id])
  }
}
