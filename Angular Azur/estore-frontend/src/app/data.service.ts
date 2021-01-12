import { Injectable } from '@angular/core';
import { products } from './products/products';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{

  //URL = 'http://localhost:7071/api/products';

  //URL = 'https://estore-functional-app.azurewebsites.net/api/products';

  URL = 'https://estore-api-management.azure-api.net/estore-functional-app/products';

  constructor(private http:HttpClient) { }

  public getProducts():Observable<products[]>
  {
    return this.http.get<products[]>(this.URL)

  }

  public addProducts(product:products ):Observable<products>{
    return this.http.post<products>(this.URL,product)
  }
  public deleteProduct(id:any){
    return this.http.delete(this.URL+"/"+id)
  }

  public filterProduct(
    criteria:String ,
    condition:any ):Observable<products[]>{
    return this.http.get<products[]>(this.URL+'&'+criteria+'='+condition)
  }

  public updateProduct(
    id:any,
    product:products){
    return this.http.put<products>(this.URL+"/"+id,product)
  }

}
