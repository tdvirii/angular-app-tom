import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.scss']
})
export class RockPaperScissorsComponent implements OnInit {
  userMove: string = '';
  computerMove: string = '';
  showOriginalContent: boolean = true;
  showResult: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  play(move: string) {
    this.userMove = move;
    this.computerMove = this.getComputerMove();
    this.showOriginalContent = false;
    this.showResult = true;
  }

  getComputerMove(): string {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  }

  getResult(): string {
    if (this.userMove === this.computerMove) {
      return "It's a tie!";
    } else if (
      (this.userMove === 'rock' && this.computerMove === 'scissors') ||
      (this.userMove === 'paper' && this.computerMove === 'rock') ||
      (this.userMove === 'scissors' && this.computerMove === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }

  reset() {
    this.userMove = '';
    this.computerMove = '';
    this.showOriginalContent = true;
    this.showResult = false;
  }
}
