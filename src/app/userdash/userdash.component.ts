import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {

  constructor(api:ProjectService) {
    api.uviewpro().subscribe(
      (Response)=>{
        this.data=Response
      }
    )
   }

  ngOnInit(): void {
  }

  data:any=[

  ]


  quantity:any;
   up:number=0;
  totprice:number=0;
  i=1
 
  isedit:any=false
  isEdit(i:any){
    this.isedit=true
  }
  plus(){
    if(this.i !=100){
      this.i++;
      this.quantity=this.i;

    }
  }
  minus()
  {
    if(this.i !=1){
      this.i--;
      this.quantity=this.i;
    }
 
  }
  total(i:any){
   
    i.totprice+=this.quantity*i.price;
    
    i.qty=this.quantity
    console.log(i)
    this.isEdit(i)
  }
 

}
