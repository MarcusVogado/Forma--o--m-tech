import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../Models/Aluno';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {
  constructor(private servico: AlunoService) { }
  public alunos: Aluno[] = []

  formulario = new FormGroup({
    nome: new FormControl(''),
    nota_um: new FormControl(''),
    nota_dois: new FormControl('')
  })

  ngOnInit() {
    this.servico.listarAlunos().
      subscribe(alunos => { this.alunos = alunos })
  }

  cadastrarAluno(): void {
    this.servico.cadastrarAluno(this.formulario.value as Aluno)
      .subscribe(
        aluno => {
          this.alunos.push(aluno)
          this.formulario.reset()
        })
  }

  deletarAluno(id: number): void {
    this.servico.deletarAluno(id).subscribe(r => {
      let positionAluno = this.alunos.findIndex(aluno => aluno.id === id)
      this.alunos.splice(positionAluno, 1)      
    });
  }
}
