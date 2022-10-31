import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  regdata={
    email:"",
    password:""
  }

  constructor(private api:ProjectService,private router:Router) { }

  ngOnInit(): void {
  }
  Clogin(){
    this.api.clogin(this. regdata).subscribe((regdata)=>{
      if(regdata.data){
      if(regdata.data.role == "admin"){
        this.router.navigate(['/admin'])
      }
      if(regdata.data.role == "user"){
        this.router.navigate(['/userdash'])
      }      
      }
      if(regdata.message){
        console.log (regdata)
      }
      
    })
  }

 

}
