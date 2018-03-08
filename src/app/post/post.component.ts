import { Component, OnInit } from '@angular/core';
import {PostService} from './service/post.service';
import { Post } from './post';
import { DataTableModule } from 'primeng/primeng';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  itens:Post[] = [];
 
  constructor(private ps : PostService ) { }

  ngOnInit() {
     
   this.consultar();
    
  }

  consultar() {
    this.ps.getPosts()
      .subscribe(dados => this.itens = dados);
  }

}
