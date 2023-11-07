import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {calculatePaymentDetails} from './helpers/calculate-payment-details.helper';
import {Resume} from './interfaces/resume.interface';
import {ExpenseDetail} from "./interfaces/expense-detail.interface";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cash-vs-credit-card';
  resume: Resume | null = null;
  expenseDetail: ExpenseDetail | undefined;
  displayedColumns: string[] = ['installmentNumber', 'capital', 'monthlyInterest', 'interest', 'net','CreditCardInstallment','remaining'];




  calculate(expenseDetail: ExpenseDetail) {
    this.expenseDetail = expenseDetail;
    this.resume = calculatePaymentDetails(this.expenseDetail);
    setTimeout(()=> {
      try {
        console.log('here');
        // @ts-ignore
        document.querySelector('#resume').scrollIntoView();
      } catch (e) {
        console.log(e);
      }
    }, 100);

  }

  goHome() {
    try {
      // @ts-ignore
      document.querySelector('#hero').scrollIntoView();
    } catch (e) {
      console.log(e);
    }
  }
}
