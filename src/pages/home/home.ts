import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Detail} from '../detail/detail'
import{ExpenseService} from '../../app/expense.service';
import{Expense} from '../../app/expense.model';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  expenses: Expense[];


  constructor(public navCtrl: NavController,
  public expennseService: ExpenseService) {
    this.expenses= expennseService.expenses;

  }
  onItemClick(expense){
      console.log('item clicked', expense);
      this.navCtrl.push(Detail, {expenseId:expense.id});
  }

  onAddClick(){
    console.log('added');
    this.navCtrl.push(Detail);
  }

}
