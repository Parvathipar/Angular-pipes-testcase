import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,DatePipe,CurrencyPipe,SlicePipe,DecimalPipe,PercentPipe],
  templateUrl: './pipes-examples.component.html',
  styleUrl: './pipes-examples.component.css'
})
export class PipesExamplesComponent {
  public Heading="student list";
  date=new Date(2024,3,2);
  amount=120;
 
}
