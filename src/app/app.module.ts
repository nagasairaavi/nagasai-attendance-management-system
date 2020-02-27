import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component'
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { CivilComponent } from './civil/civil.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { CseComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { StudentModule } from './student/student.module';
import { AdminModule } from './admin/admin.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LogoutComponent } from './logout/logout.component';
import { ForgetComponent } from './forget/forget.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    LoginComponent,
    CivilComponent,
    MechanicalComponent,
    CseComponent,
    EceComponent,
    DepartmentsComponent,
    LogoutComponent,
    ForgetComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    StudentModule,
    NgxSpinnerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
