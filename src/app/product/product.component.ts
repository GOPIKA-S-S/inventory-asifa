import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product={
    pcategory:"",
    pname:"",
    model:"",
    color:"",
    price:"",
    qty:"",
    img:""
  }
  constructor(private api:ProjectService) { 
    api.viewprdt().subscribe(
      (Response)=>{
        this.data=Response
      }
    )
  }

  ngOnInit(): void {
  }
  onEdit(item:any){
    item.isEdit=true
  }
 
 


  data:any=[
    
     ]

}



