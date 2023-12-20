import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Aluno } from '../../Models/Aluno';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  //Obter a funcao Cadastrar Aluno que está no component Principal
  @Output() cadastrarAluno = new EventEmitter<Aluno>();
  //Funcao para executar o cadastro
  cadastrar() {
    this.cadastrarAluno.emit(this.formulario.value as Aluno)
  }

  //Formulario para cadastrar aluno
  formulario = new FormGroup({
    nome: new FormControl(),
    nota1: new FormControl(),
    nota2: new FormControl()

  })

}
