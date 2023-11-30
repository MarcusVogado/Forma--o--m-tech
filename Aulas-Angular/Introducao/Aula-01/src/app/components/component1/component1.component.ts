import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {
  texto: string = "Hellow World!"

  pessoa:any = {
    'nome': 'Julio',
    'idade': 36
  };
}
