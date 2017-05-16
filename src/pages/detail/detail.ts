import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import{ExpenseService} from '../../app/expense.service';
import{Expense} from '../../app/expense.model';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class Detail {

expense: Expense; 
categories: string [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public expenses: ExpenseService, public alertCtrl: AlertController) {
 
const expenseId= navParams.get('expenseId');
this.categories = expenses.categories;
if(expenseId){
this.expense= expenses.getExpense(expenseId);
}else{
  this.expense={
    date:'',
    amount:0,
    category:'',
    description:''
  }
}
}

onSave(){
  if(this.expense.id){
  this.expenses.update(this.expense);
}
  else{
    this.expenses.addExpense(this.expense);
  }
  this.navCtrl.pop();
}
onRemove(){
  
   let confirm = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Are you sure you want to delete this Expense?',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Delete',
          handler: () => {
          this.expenses.removeExpense(this.expense.id);
           this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
}

}
