import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';



@Component({
  selector: 'app-front',
  templateUrl: './front.component.html', 
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  username="admin@12" 
  password="admin123"


  constructor(private api:ProjectService,private router:Router) { }

  ngOnInit(): void {
    
  }
  alogin(){
    if(this.password&&this.username){
      this.router.navigate(['/admin'])
    }
    else{
      alert("invalid Credentials")
    }
  }
  

}
