import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  altura: number = 1.77;
  peso: number = 65;
  imc: number;


  calculouIMC: boolean = false;

  calcularIMC(){
    this.imc = Math.round( this.peso / Math.pow(this.altura, 2) * 1e2 )/ 1e2;
    this.calculouIMC = true;
  }

  calcularOutroIMC(){
    this.calculouIMC = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
