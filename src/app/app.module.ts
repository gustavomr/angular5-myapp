import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/primeng';

import { DataTableModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './post/service/post.service';
import { MyinputComponent } from './myinput/myinput.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MyinputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,CommonModule, SharedModule, DataTableModule, BrowserAnimationsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
