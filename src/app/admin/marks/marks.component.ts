import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  constructor(private cs:CommonService) { }
  file:File;
  marks:[]=[]
  ngOnInit() {
    this.cs.getMarks().subscribe((res)=>{
      console.log(res['message']);
      if(res['message']==="no marks data"){
        alert("no marks data")
      }
      else{
        this.marks=res['message']
        console.log(this.marks);
        
      }
    })
  }
  fileUpload(filedata){
    this.file=filedata.target.files[0]
  }
  marksData(data){
    let formdata = new FormData();
    formdata.append("branch",data.branch);
    formdata.append("year",data.year);
    formdata.append("marks",this.file,this.file.name);
    this.cs.setMarks(formdata).subscribe((res)=>{
    if(res["message"]=="marks Sheet uploaded successfully")
    {
    alert(res["message"]);
    this.ngOnInit()
    }
    else if(res["err_desc"]=="Corupted excel file")
    {
    alert(res["err_desc"]);
    }
   })
  }
}
