import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }
  Signup(regdata:any){
    return this.http.post<any>('http://localhost:3200/signups',regdata)
  }
  Addprdt(product:any){
    return this.http.post<any>('http://localhost:3200/admin',product)
  }
  viewprdt=()=>{
    return this.http.get('http://localhost:3200/product')
 }
 uviewpro=()=>{
  return this.http.get('http://localhost:3200/userdash')
 }
 clogin(t3:any){
  return this.http.post<any>('http://localhost:3200/login',t3)
}
viewcus=()=>{
  return this.http.get('http://localhost:3200/customer')
}
}
