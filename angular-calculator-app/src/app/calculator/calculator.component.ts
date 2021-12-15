import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  numberOne: any = 0;
  numberTwo: any = 0;
  operand: any = '';
  result: any = 0;
  constructor() {}

  ngOnInit(): void {}
  bang(numberOne: any, numberTwo: any, operand: any) {
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);
    if (operand === '1') {
      this.result = numberOne + numberTwo;
    } else if (operand === '2') {
      this.result = numberOne - numberTwo;
    } else if (operand === '3') {
      this.result = numberOne * numberTwo;
    } else if (operand === '4') {
      if (this.numberTwo === 0) {
        this.result = 'Error';
      } else {
        this.result = numberOne / numberTwo;
      }
    }
  }
  // bang() {
  //   switch (this.operand) {
  //     case '1':
  //       this.result = this.numberOne + this.numberTwo;
  //       break;
  //     case '2':
  //       this.result = this.numberOne - this.numberTwo;
  //       break;
  //     case '3':
  //       this.result = this.numberOne * this.numberTwo;
  //       break;
  //     case '4':
  //       if(this.numberTwo === 0){
  //         this.result = "error";
  //       }else{
  //         this.result = this.numberOne / this.numberTwo;
  //       }
  //       break;
  //   }
  // }
}
