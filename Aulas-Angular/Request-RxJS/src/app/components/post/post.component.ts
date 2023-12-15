import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../Models/Post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  constructor(private servicePost: PostService) { }
  listaPost: Post[] = []
  ngOnInit() {
    this.listPosts()
  }
  listPosts(): void {
    this.servicePost.listarPostagens().subscribe(postData => { this.listaPost = postData })
  }
}
