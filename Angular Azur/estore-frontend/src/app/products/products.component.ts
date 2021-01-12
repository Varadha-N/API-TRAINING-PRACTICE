import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { products } from './products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  datas : products[] = [];
  deleteResponse:any;

  constructor(private service:DataService,private router:Router) { }

  ngOnInit(): void {
    this.service.getProducts()
    .subscribe(response => this.datas = response);
  }

  public deleteProduct(id:any){
    console.log(id);
    this.service.deleteProduct(id).subscribe(response => this.deleteResponse = response)
    this.router.navigate(['/products']);
  }

  public searchProduct(criteria:String , condition:any){
    this.router.navigate(['/searchProducts',criteria , condition]);
  }

  public updateProduct(
    id:any
  ){
    this.router.navigate(['/updateProduct',id])
  }

}

