import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  constructor(private cs:CommonService) { }
  file:File;
  attendence:[]=[]
  ngOnInit() {

    this.cs.getAttendence().subscribe((res)=>{
      console.log(res['message']);
      
      if(res['message']==="no attendance data"){
        alert("no attendance data")
      }
      else{
        this.attendence=res['message']
        console.log(this.attendence);
        
      }
    })
  }
  
  fileUpload(filedata){
    this.file=filedata.target.files[0];
  }
  attendanceData(data){

    let formdata = new FormData();
    formdata.append("branch",data.branch);
    formdata.append("year",data.year);
    formdata.append("attendence",this.file,this.file.name);
    this.cs.setAttendence(formdata).subscribe((res)=>{
    if(res["message"]=="Attendence Sheet uploaded successfully")
    {
    alert(res["message"]);
    this.ngOnInit();
    }
    else if(res["err_desc"]=="Corupted excel file")
    {
    alert(res["err_desc"]);
    }
   })
  }
    
}
