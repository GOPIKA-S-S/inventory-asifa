import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {"sl":1,"cusname":"john","item":"samsung washing machine","price":350000,"photo":"1.jpg","qty":20},
    {"sl":2,"cusname":"Raheal","item":"samsung led","price":350000,"photo":"1.jpg","qty":50},
    {"sl":3,"cusname":"Samuel","item":"samsung galaxy","price":350000,"photo":"1.jpg","qty":15},
    {"sl":4,"cusname":"Jibin","item":"samsung ","price":350000,"photo":"1.jpg","qty":30},
    {"sl":5,"cusname":"Ray","item":"refregerator","price":350000,"photo":"1.jpg","qty":20}
    
    
    
  
  
  ]
}
