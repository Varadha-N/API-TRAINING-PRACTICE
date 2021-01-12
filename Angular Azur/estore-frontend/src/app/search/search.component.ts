import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { products } from '../products/products';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  criteria : any;
  value :any;

  datas : products[] = [];
  
  constructor(private service:DataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.datas = this.service.getProducts();
    this.criteria = this.route.snapshot.paramMap.get("criteria");
    this.value = this.route.snapshot.paramMap.get("condition");
    this.service.filterProduct(this.criteria,this.value).subscribe( response => this.datas = response);
  }

}
