import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'question',
  templateUrl: 'src/question.component.html',
  styles: [`
    .indent {
      margin-left: 3ex;
    }
  `]
})
export class QuestionComponent {

  @Input() question: Question;
  @Input() correct: boolean;
  @Output() answer = new EventEmitter<string>();

  get checked() {
    return this.correct !== undefined;
  }

}
