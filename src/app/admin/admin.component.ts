import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  product={
    pcategory:"",
    pname:"",
    model:"",
    color:"",
    price:"",
    qty:"",
    img:""
  }

  constructor(private api:ProjectService) { }

  ngOnInit(): void {
  }
addprdt()
{
  this.api.Addprdt(this.product).subscribe((product)=>{

  })
  alert("success")
}
 
}
