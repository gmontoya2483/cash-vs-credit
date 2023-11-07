import {Component, Input} from '@angular/core';
import {Resume} from "../interfaces/resume.interface";

@Component({
  selector: 'app-expense-resume, [app-expense-resume]',
  templateUrl: './expense-resume.component.html',
  styleUrls: ['./expense-resume.component.scss'],
  host: {class: 'section-resume'}
})
export class ExpenseResumeComponent {

  get isBestOptionCash(): boolean {
    return this.resume!.cashPrice < this.resume!.totalPrice;
  }

  @Input() resume!: Resume;

}
