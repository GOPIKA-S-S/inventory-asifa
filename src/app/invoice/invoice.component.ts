import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {"sl":1,"name":"john","item":"samsung led","date":"21/10/22","photo":"1.jpg","qty":150},
    {"sl":1,"name":"Catherein","item":"samsung led","date":"21/10/22","photo":"1.jpg","qty":150},
    {"sl":1,"name":"Emmanuel","item":"samsung led","date":"21/10/22","photo":"1.jpg","qty":150},
    {"sl":1,"name":"Peter","item":"samsung led","date":"21/10/22","photo":"1.jpg","qty":150},
    {"sl":1,"name":"Samuel","item":"samsung led","date":"21/10/22","photo":"1.jpg","qty":150}
    
    
    
  
  
  ]


}
