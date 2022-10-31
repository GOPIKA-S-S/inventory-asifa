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
  Deleteprdt(datas:any){
    this.api.deleteprdt(datas._id).subscribe(
      (data)=>{
         console.log(data);
         this.data = this.data.filter((u:any)=>u!==datas)
      }
    )

  }
  Updateprdt(i:any){
    
    console.log()
    this.api.updateprdt(i).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
      }
      
    )

  }


  data:any=[
    
     ]

}



