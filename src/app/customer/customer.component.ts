import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private api:ProjectService) { 
    api.viewcus().subscribe(
      (Response)=>{
        this.data=Response
      }
    )
  }

  ngOnInit(): void {
  }
  data:any=[
  ]


}
