import { Pipe, PipeTransform } from '@angular/core';
import { Aluno } from '../Models/Aluno';

@Pipe({
  name: 'media',
  standalone: true
})
export class MediaPipe implements PipeTransform {

  transform(aluno: Aluno): number {

    let notaUm = aluno.nota1 || 0
    let notaDois = aluno.nota2 || 0
    return (notaUm + notaDois) / 2;
  }

}
