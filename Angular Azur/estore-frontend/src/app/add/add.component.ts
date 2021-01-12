import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { products } from '../products/products';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  datas : products[] = [];
  postResponse : any;
  
  constructor(private service:DataService,private router:Router) { }

  ngOnInit(): void {
    this.service.getProducts()
    .subscribe(datas => this.datas = datas);
  }

  addProduct(
    name:any,
    category:any,
    price:any,
  ){
    var product:any = new Object();
    product.name = name;
    product.category = category;
    product.price = Number.parseFloat(price);
    this.service.addProducts(product).subscribe(response => this.postResponse = response);
    this.router.navigate(['/products']);
  }
}
