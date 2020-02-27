import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
department;
  constructor(private hc:HttpClient,private router:Router) { }
//id generator
generateHallNo(obj):Observable<any>{
  console.log(obj);
  return this.hc.post('/save',obj);
}
//register student
regStudent(obj):Observable<any>{
  console.log(obj);
  return this.hc.post('register',obj)
}
//automatic read ngoninit
fromService(obj):Observable<any>{
  return this.hc.get(`/readAll/${obj}`)
}
//delete student
deleteData(obj):Observable<any>{
  console.log(`${obj.mobile}`);
  return this.hc.delete(`/deletestudent/${obj.mobile}`)
}
updateObj(obj):Observable<any>{
  console.log(obj);
  return this.hc.put('/updatestudent',obj)
}
toCommonComponent(){
  return this.department;
}
//to read year wise
sortByYear(byyear):Observable<any>{
  console.log(byyear);
  return this.hc.post('/readbyyear',byyear)
  
}
loggedinstatus:boolean
loggedinuser:any
logout(){
  var a=confirm("Are you sure you want to logout???")
  if(a==true){
    this.loggedinstatus=false;
    this.router.navigate(['/home'])
  }
}
//id
doGenerateId():Observable<any>{
  return this.hc.get('/saveid')
}
studentLogin(obj):Observable<any>{
  console.log(obj);
  return this.hc.post('/login',obj);
  
}
//upload attendance
setAttendence(data):Observable<any>{
  return this.hc.post<any>('/uploadattendence',data)
  }
//get attendence
getAttendence():Observable<any>{
  return this.hc.get('/readattendence')
}
//to read logged student attendance
loggedStudentData(obj):Observable<any>{
  return this.hc.get(`/loggedinstudentattendence/${obj}`)
}
//to read logged student marks
loggedStudentMarks(obj):Observable<any>{
  return this.hc.get(`/loggedinstudentmarks/${obj}`)
}
//get marks
getMarks():Observable<any>{
  return this.hc.get('/getmarks')
}
//upload marks
setMarks(data):Observable<any>{
  return this.hc.post<any>('uploadmarks',data)
}
//for forget password
forgetPassword(obj):Observable<any>{
console.log(obj);

return this.hc.post<any>('/forgetpassword',obj)
}
}
