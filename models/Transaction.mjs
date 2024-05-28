import { v4 as uuid4 } from 'uuid';

export default class Transaction {
  constructor(sum, payer, payee, ticketID, firstName, lastName, email) {
    this.sum = sum;
    this.payer = payer;
    this.payee = payee;
    this.ticketID = ticketID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.transactionId = uuid4().replaceAll('-', '');
  }
}