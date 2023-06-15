import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {
  dollarAmount: number = 0;
  tipPercentage: number = 0;
  tipAmount: number = 0;
  totalAmount: number = 0;

  constructor() { }

  ngOnInit() {

  }

  calculateTipAmount(): string {
    const tipAmount = (Number(this.dollarAmount) * (Number(this.tipPercentage) / 100));
    return tipAmount.toFixed(2);
  }

  calculateTotalAmount(): string {
    const tipAmount = Number(this.calculateTipAmount());
    const totalAmount = Number(this.dollarAmount) + Number(tipAmount);
    return totalAmount.toFixed(2);

  }

  updateTipAmount() {
    this.tipAmount = (Number(this.dollarAmount) * (Number(this.tipPercentage) / 100));
  }

}
