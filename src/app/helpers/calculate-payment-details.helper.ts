import {Installment} from '../interfaces/installment.interface';
import {ExpenseDetail} from "../interfaces/expense-detail.interface";

export const calculatePaymentDetails = ({cashPrice, creditCardPrice , installments, tna}: ExpenseDetail) => {
  const installmentDetails: Installment[] = [];
  const monthlyInterest: number = (tna / 360) * 30
  const installmentPrice = creditCardPrice / installments;

  for (let i= 0; i<installments; i++){
    let capital = 0;

    if(i===0) {
      capital = cashPrice
    } else {
      capital = (installmentDetails[i-1].remaining > 0) ? installmentDetails[i-1].remaining : 0;
    }

    const interest = (capital * monthlyInterest) / 100;
    const net= capital + interest;
    const remaining = net - installmentPrice;

    installmentDetails.push({
      installmentNumber: i+1,
      capital: capital,
      monthlyInterest: monthlyInterest,
      interest: interest,
      net: net,
      CreditCardInstallment: installmentPrice,
      remaining: remaining
    });

    console.log(installmentDetails);
  }

  const totalInterest = installmentDetails.map(installment => installment.interest).reduce((accumulator, currentValue) => accumulator + currentValue)
  const totalPrice = creditCardPrice - totalInterest

  return  {
    creditCardPrice: creditCardPrice,
    cashPrice: cashPrice,
    totalInterest,
    totalPrice,
    tna,
    tnm: monthlyInterest,
    installments: installmentDetails,
  }

}
