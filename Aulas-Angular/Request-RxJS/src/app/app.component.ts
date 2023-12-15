import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { EnderecoComponent } from "./components/endereco/endereco.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        PostComponent,
        EnderecoComponent
    ]
})
export class AppComponent {
  title = 'Request-RxJS';
}
