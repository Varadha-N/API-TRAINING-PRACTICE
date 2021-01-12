import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { products } from '../products/products';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:any;
  datas : products[] = [];
  updateResponse : any;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private service:DataService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    //this id and app routing.module id is same
    this.service.getProducts()
    .subscribe(response => this.datas = response);
  }

  public updateProduct(
    name:any,
    category:any,
    price:any,
  ){
    var product:any = new Object();
    product.id = this.id;
    product.name = name;
    product.category = category;
    product.price = Number.parseFloat(price);
    console.log(product)
    this.service.updateProduct(this.id,product).subscribe(response => this.updateResponse = response)
    this.router.navigate(["/products"])
  }

}
