import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component {
  test: boolean = true

  visualizarTexto(): void {
    this.test = !this.test;
  }
  //Lista de nomes
  nomes: string[] = ['Marcus', 'Gabriel', 'Silmara']
  linguagem: string = ''

}
