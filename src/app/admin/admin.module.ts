import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AdminRoutingModule } from './admin-routing.module';
import { GenerateidComponent } from './generateid/generateid.component';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';
import { BranchesComponent } from './branches/branches.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarksComponent } from './marks/marks.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { CommonComponent } from './common/common.component';
import { CommonPipe } from './common.pipe';



@NgModule({
  declarations: [GenerateidComponent, RegisterstudentComponent, BranchesComponent, AttendanceComponent, MarksComponent, AdminprofileComponent, CommonComponent, CommonPipe],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
