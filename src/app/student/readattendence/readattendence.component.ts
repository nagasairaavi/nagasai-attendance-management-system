import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-readattendence',
  templateUrl: './readattendence.component.html',
  styleUrls: ['./readattendence.component.css']
})
export class ReadattendenceComponent implements OnInit {
  studentdata=this.cs.loggedinuser;
  loggedstudentid=this.studentdata.studentid;
  attendencedata;
  constructor(private cs:CommonService) { }
  ngOnInit() {
    this.cs.loggedStudentData(this.loggedstudentid).subscribe((res)=>{
      if(res['message']=="no data found with the given student id"){
        alert("no data found with the given student id")
      }
      else{
        this.attendencedata=res["message"];
        console.log(this.attendencedata);
        
      }
    })
  }
  
}
