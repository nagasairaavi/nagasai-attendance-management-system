import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-generateid',
  templateUrl: './generateid.component.html',
  styleUrls: ['./generateid.component.css']
})
export class GenerateidComponent implements OnInit {

  constructor(private cs:CommonService) { }
data1:any=[]
  ngOnInit() {
    this.cs.doGenerateId().subscribe((obj)=>{
    this.data1=obj["message"]
    })

  }
  generateId(obj){
    console.log(obj);
    obj.count=0;
    this.cs.generateHallNo(obj).subscribe((res)=>{
      if(res['message']=="success"){
      alert(res['message']);
      this.ngOnInit()
      }
      else if(res["message"]=="id aleady generated"){
        alert(res['message'])
        this.ngOnInit();
      }
      
    })
    
  }


}
