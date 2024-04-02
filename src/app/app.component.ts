import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { GenderpipePipe } from './genderpipe.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PipesExamplesComponent,CommonModule,GenderpipePipe,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes-testcase';

public student=[
  {name:"Sachin",age:23,gender:"Male"},
  {name:"Aswathy",age:23,gender:"Female"},
  {name:"Arjun",age:29,gender:"Male"},
  {name:"Arundhathi",age:25,gender:"Female"}
]
}
