import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe',
  standalone: true
})
export class GenderpipePipe implements PipeTransform {

  transform(gender: string,name:string): string {
    if(gender==='Male'){
      return 'Mr. ' + name;
    }
    else if (gender === 'Female')
     {
      return 'Miss. ' + name;
    }
   return name;
    

}
}
