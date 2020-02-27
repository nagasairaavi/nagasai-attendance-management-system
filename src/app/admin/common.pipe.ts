import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'common'
})
export class CommonPipe implements PipeTransform {

  transform(fromServer:any, commonTerm:any): any[] {
    if(!commonTerm)
    {
      console.log(fromServer);
      
    return fromServer;
    }
    else
    {
      console.log(fromServer);
      
    return fromServer.filter(std=> std["firstname"].toLowerCase().indexOf(commonTerm.toLowerCase())!==-1)
    }
    
    }
}
