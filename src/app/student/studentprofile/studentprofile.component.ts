import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {

  constructor(private cs:CommonService) { }
 profile:any=this.cs.loggedinuser
  ngOnInit() {
    console.log(this.profile);
    
  }

}
