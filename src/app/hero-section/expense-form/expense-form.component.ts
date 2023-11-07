import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExpenseDetail} from "../../interfaces/expense-detail.interface";
import {calculatePaymentDetails} from "../../helpers/calculate-payment-details.helper";

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent {
  @Output() expenseDetails = new EventEmitter<ExpenseDetail>();


  expenseForm = new FormGroup({
    cashPrice : new FormControl(null,[Validators.required,  Validators.min(0)]),
    creditCardPrice : new FormControl(null, [Validators.required, Validators.min(0)]),
    installments: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(24)]),
    tna: new FormControl(null, [Validators.required, Validators.min(0)])
  })







  submit() {
    if (this.expenseForm.invalid) return;

    const cashPrice: number | null  = this.expenseForm.controls.cashPrice.value;
    const creditCardPrice: number | null  = this.expenseForm.controls.creditCardPrice.value;
    const installments: number | null  = this.expenseForm.controls.installments.value;
    const tna: number | null  = this.expenseForm.controls.tna.value;

    if(!creditCardPrice || !installments || !cashPrice || !tna) return;

    this.expenseDetails.emit({
      cashPrice,
      creditCardPrice,
      installments,
      tna
    });

    this.expenseForm.reset();
    this.expenseForm.controls.cashPrice.setErrors(null);
    this.expenseForm.controls.creditCardPrice.setErrors(null);
    this.expenseForm.controls.installments.setErrors(null);
    this.expenseForm.controls.tna.setErrors(null);
  }


}
