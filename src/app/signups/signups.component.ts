import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-signups',
  templateUrl: './signups.component.html',
  styleUrls: ['./signups.component.css']
})
export class SignupsComponent implements OnInit {
  regdata={
    firstname:"",
    lastname:"",
    email:"",
    shop:"",
    password:""
    

  }

  constructor(private api:ProjectService) { }

  ngOnInit(): void {}
   signup()
  {
    console.log(this.regdata)
   this.api.Signup(this.regdata).subscribe((regdata)=>{
    alert("success");
   })
   
  }

}
