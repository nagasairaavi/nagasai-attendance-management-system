import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
public message:any
  constructor(private cs:CommonService) { }
fromServer:any=[];
commonTerm;
updatevariable:any=[];
branch;
  ngOnInit():void {
    this.branch=this.cs.toCommonComponent()
     console.log(this.branch);
   
    //from service
    this.cs.fromService(this.branch).subscribe((dataAray)=>{

      this.fromServer=dataAray["message"];
      console.log(this.fromServer);
      
  }
  )}
//xcel downloader
public downloadFile(): void {
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.fromServer);
  const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames:
  ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type:
  'array' });
  this.saveAsExcelFile(excelBuffer, 'excelFileName');
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
  const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() +
  EXCEL_EXTENSION);
  }
//pdf downloader
downloadPDF(){
  const doc = new jsPDF()
  var col=["fullname","studentid","year","mobile","branch","address","ssc","inter"]
  var rows=[];
  this.fromServer.forEach(element=>{
  let fullname=element.firstname+element.lastname
  let studentid=element.studentid;
  let year=element.year;
  let mobile=element.mobile;
  let branch=element.branch;
  let address=element.address;
  let ssc=element.ssc;
  let inter=element.inter;

  let temp=[fullname,studentid,year,mobile,branch,address,ssc,inter]
  rows.push(temp)
  })
  doc.autoTable(col,rows,{
  theme:'grid'
  })
  doc.save('first.pdf')
 }
 





   //register student
   registerStudent(obj){
    console.log(obj);
    this.cs.regStudent(obj).subscribe((res)=>{
      if(res['message']!=="success"){
        alert("generate id first")
      }
      else{
        alert("successfully registered")
        this.ngOnInit();
      }
    })
  }
  //read year wise
  obj={'year':0,'branch':''}
  changeYear(year:any){
    if(year==="all"){
      this.ngOnInit();
    }
    else{
      console.log(year);
      this.obj.year=year;
      this.obj.branch=this.branch;
      console.log(this.obj);
      this.cs.sortByYear(this.obj).subscribe((dataArray)=>{
        if(dataArray["message"]==="nodatafound"){
          alert("nodata found")
        }
        else{
          console.log(dataArray["message"]);
          
          this.fromServer=dataArray["message"]
          console.log(this.fromServer);
          
        }
      })
      
      
    }
  }
  
  deleteStudent(obj){
    var a=confirm("Do you want to continue?")
    if(a==true){
      this.cs.deleteData(obj).subscribe((res)=>{
        if(res['message']=="success"){
          alert("deleted successfully")
          this.ngOnInit();
        }
      })
    }
    else{
      this.ngOnInit();
    }
   
  }
  update(obj){
    console.log(obj);
    this.updatevariable=obj;
  }
  updateStudent(obj){
    this.updatevariable=obj;
    this.cs.updateObj(obj).subscribe((res)=>{
      if(res['message']=="success"){
        alert("updated successfully")
        this.ngOnInit();
      }
    })
    
  }
 
 
  
  }
