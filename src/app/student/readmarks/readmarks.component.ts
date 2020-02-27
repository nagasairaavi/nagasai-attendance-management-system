import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-readmarks',
  templateUrl: './readmarks.component.html',
  styleUrls: ['./readmarks.component.css']
})
export class ReadmarksComponent implements OnInit {
studentdata=this.cs.loggedinuser;
loggedstudentid=this.studentdata.studentid;
marksdata;
  constructor(private cs:CommonService) { }

  ngOnInit() {
    this.cs.loggedStudentMarks(this.loggedstudentid).subscribe((res)=>{
      if(res['message']=="no data found with the given student id"){
        alert("no data found with the given student id")
      }
      else{
        this.marksdata=res["message"];
        console.log(this.marksdata);
      }
    })
  }

}
