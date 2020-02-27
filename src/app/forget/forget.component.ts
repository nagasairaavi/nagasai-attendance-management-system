import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(private cs:CommonService,private router:Router) { }

  ngOnInit() {
  }
  submitMail(obj){
    console.log(obj);
    this.cs.forgetPassword(obj).subscribe((res)=>{
     if(res['message']==="Please enter registered email id") {
       alert("Please enter registered email id")
     }
     else{
       alert("studentid and password sent to your mail-id")
     }
    })
  }
}
