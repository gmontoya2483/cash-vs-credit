import {Component, Input} from '@angular/core';
import {Installment} from "../interfaces/installment.interface";

@Component({
  selector: 'app-installment-list, [app-installment-list]',
  templateUrl: './installment-list.component.html',
  styleUrls: ['./installment-list.component.scss'],
  host: {class: 'section-installment'}
})
export class InstallmentListComponent {

  @Input() installments!: Installment[];
  displayedColumns: string[] = ['installmentNumber', 'capital', 'monthlyInterest', 'interest', 'net','CreditCardInstallment','remaining'];

}
