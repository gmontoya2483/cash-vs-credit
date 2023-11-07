import {Component, EventEmitter, Output} from '@angular/core';
import {ExpenseDetail} from "../interfaces/expense-detail.interface";

@Component({
  selector: 'app-hero-section, [app-hero-section]',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  host: {class: 'section-hero'}
})
export class HeroSectionComponent {

  @Output() expenseDetails = new EventEmitter<ExpenseDetail>();

  calculate($event: ExpenseDetail) {
    this.expenseDetails.emit($event)
  }
}
