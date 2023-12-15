import { Component } from '@angular/core';

@Component({
  selector: 'app-component3',
  standalone: true,
  imports: [],
  templateUrl: './component3.component.html',
  styleUrl: './component3.component.css'
})
export class Component3Component {
  media: number = 8
  linguagem: string = 'CSS'
  nomes: string[] = ['Luciano','Alberto','Marcus']

}
