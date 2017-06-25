import { Component } from '@angular/core';
import { Question } from './question.model';
import { QuizService } from './quiz.service';

@Component({
  selector: 'quiz-app',
  templateUrl:'src/app.component.html',
})
export class AppComponent {

  questions: Question[];
  correctAnswers: Set<string>;

  private answers = new Map<string, string>();

  constructor(private quizService: QuizService) {
    this.questions = this.quizService.questions;
  }

  onAnswer(questionId: string, answerId: string) {
    this.answers.set(questionId, answerId);
  }

  isCorrect(questionId): boolean {
    if (this.correctAnswers) {
      return this.correctAnswers.has(questionId);
    }
  }

  check() {
    this.correctAnswers = this.quizService.check(this.answers);
  }

  get checked() {
    return this.correctAnswers !== undefined;
  }

}
