import {Installment} from './installment.interface';
export interface Resume{
  creditCardPrice: number;
  cashPrice: number;
  totalInterest: number;
  totalPrice: number;
  tna:number;
  tnm: number;
  installments: Installment[],
}
