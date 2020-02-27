import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateidComponent } from './generateid/generateid.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';
import { BranchesComponent } from './branches/branches.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarksComponent } from './marks/marks.component';
import { CommonComponent } from './common/common.component';


const routes: Routes = [{path:'adminprofile',component:AdminprofileComponent,children:
                                                                            [{path:'generateid',component:GenerateidComponent},
                                                                             {path:'registerstudent',component:RegisterstudentComponent},
                                                                             {path:'branches',component:BranchesComponent},
                                                                             {path:'common',component:CommonComponent},
                                                                             {path:'attendance',component:AttendanceComponent},
                                                                             {path:'marks',component:MarksComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
