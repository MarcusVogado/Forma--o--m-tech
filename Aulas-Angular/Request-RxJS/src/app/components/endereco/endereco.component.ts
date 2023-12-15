import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnderecoService } from '../../services/endereco.service';
import { Endereco } from '../../Models/Endereco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.css'
})
export class EnderecoComponent {
  public cep?: number
  public endereco?: Endereco
  constructor(private serviceEndereco: EnderecoService) {

  }

  buscarEndereco(): void {

    this.serviceEndereco.buscarEndereco(this.cep).subscribe(endereco => { this.endereco = endereco })


  }
}
