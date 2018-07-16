import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { CvComponent } from './cv/cv.component';
import { CvExtendedComponent } from './cv-extended/cv-extended.component';
import { CvWorkComponent } from './cv-work/cv-work.component';
import { CvEducationComponent } from './cv-education/cv-education.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCompComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    CvComponent,
    CvExtendedComponent,
    CvWorkComponent,
    CvEducationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
