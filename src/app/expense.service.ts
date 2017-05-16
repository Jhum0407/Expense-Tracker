import {Expense} from './expense.model';
import uuidV4 from 'uuid/v4';
export class ExpenseService{
  
  categories = [
  'Food','Travel','Other'
];
static nextId = 4;
 expenses=this.loadExpenses();

  getExpense(expenseId: string){
           const expense= this.expenses.find(it =>it.id=== expenseId);
          return Object.assign({}, expense);
  }
  update(expense: Expense){
  const index= this.expenses.findIndex(it =>it.id=== expense.id);
  this.expenses[index]=expense;
  this.storeExpenses();
}

addExpense(expense: Expense){
  expense.id= uuidV4();
  this.expenses.push(expense);
  this.storeExpenses();
}

removeExpense(expenseId: string){
const index= this.expenses.findIndex(it =>it.id=== expenseId);
this.expenses.splice(index,1);
this.storeExpenses();
}

storeExpenses(){
  localStorage.setItem('expenses',JSON.stringify(this.expenses));
}
loadExpenses(): Expense[]{
const exp = localStorage.getItem('expenses');
if(exp){
  return JSON.parse(exp);
}
else{
  return [];
}
}
}