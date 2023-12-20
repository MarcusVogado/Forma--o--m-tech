import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { TabelaComponent } from '../tabela/tabela.component';
import { CommonModule } from '@angular/common';
import { Aluno } from '../../Models/Aluno';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormularioComponent, TabelaComponent, CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  public listAlunos: Aluno[] = [
    { nome: 'Marcus', nota1: 8, nota2: 10 },
    { nome: 'Lucas', nota1: 8, nota2: 10 },
    { nome: 'Alberto', nota1: 7, nota2: 5 }
  ]

  cadastrarAluno(aluno: Aluno): void {
    this.listAlunos.push(aluno)
  }
}
