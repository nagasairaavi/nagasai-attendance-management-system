import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private cs:CommonService,private router:Router) { }

  ngOnInit(){
  
      // var a=confirm("Are you sure you want to logout???")
      // if(a==true){
      //   this.router.navigate(['/home'])
      // }
    
  }

}
