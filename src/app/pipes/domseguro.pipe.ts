import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domLimpio: DomSanitizer){

  }

  transform(value: string, ...args: unknown[]): unknown {
    return this.domLimpio.bypassSecurityTrustResourceUrl( value );
  }

}
