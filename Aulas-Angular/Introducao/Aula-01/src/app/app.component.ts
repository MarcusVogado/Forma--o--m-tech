import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component1Component } from "./components/component1/component1.component";
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';
import { Component4Component } from './components/component4/component4.component';
import { Component5Component } from './components/component5/component5.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule,
    RouterOutlet,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component
  ]
})
export class AppComponent {
  title = 'Aula-01';
}
