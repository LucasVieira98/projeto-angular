import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzidaPipe implements PipeTransform{
    transform(texto: string, arg: number): string {
        if(texto.length > arg) {
            return texto.substr(0, arg) + '... '
        }

        return texto
    }
}
