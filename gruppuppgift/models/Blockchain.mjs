import Transaction from "./Transaction.mjs";

export default class Blockchain {
    constructor() {}

    createTransaction(amount, sender, recipient) {
        return new Transaction(amount, sender, recipient);
      }
    
      addTransaction(transaction) {
        this.pendingTransactions.push(transaction);
        return this.getLastBlock().blockIndex + 1;
      } 
}