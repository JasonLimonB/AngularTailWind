import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, show:boolean = true): string {
    return (show) ? '*'.repeat(value.length) : value ;
  }

}
