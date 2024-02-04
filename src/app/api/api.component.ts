import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from '../services/product-http.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  products: any;
  customers: any;
  value: string | undefined;
  checked: boolean = false;

  constructor(private productService: ProductHttpService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe({
      next: (data) => {
      this.customers = data.result;
      console.log('Data fetched successfully:', this.customers);
        },
      error: (error: any) => console.error('Error fetching items', error),
      complete: () => console.log('Request completed')
    });
  }


}
