import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  branch;
  constructor(private router:Router,private cs:CommonService) { }

  ngOnInit() {
  }
  readBranch(obj){
    console.log(obj);
    this.branch=obj;
    this.cs.department=this.branch
    console.log(this.branch);
    
    this.router.navigate(['/adminprofile/common'])
  }
}
