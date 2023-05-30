import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quizz-button',
  templateUrl: './quizz-button.component.html',
  styleUrls: ['./quizz-button.component.css']
})
export class QuizzButtonComponent {
  @Input() name: string = '';
  @Output() onClick = new EventEmitter();
}
