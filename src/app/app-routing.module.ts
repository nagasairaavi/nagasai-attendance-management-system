import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { CivilComponent } from './civil/civil.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { CseComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgetComponent } from './forget/forget.component';


const routes: Routes = [{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:HomeComponent},
                        {path:"departments",component:DepartmentsComponent},{path:'civil',component:CivilComponent},
                                                                                     {path:'mechanical',component:MechanicalComponent},
                                                                                     {path:'cse',component:CseComponent},
                                                                                     {path:'ece',component:EceComponent},
                        {path:"aboutus",component:AboutusComponent},
                        {path:"contactus",component:ContactusComponent},
                        {path:"login",component:LoginComponent},{path:"forget",component:ForgetComponent},
                      {path:"logout",component:LogoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
