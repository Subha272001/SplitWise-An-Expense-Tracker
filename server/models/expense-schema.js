import mongoose from 'mongoose';

const ExpenseItemSchema = mongoose.Schema({
      expenseShareId : {
        type: String
      },
      userId :{
        type: String
      },
      description: {
        type: String
      },
      amount:{
        type: Number
      },
      splitMethod : {
         type: String
      },
      paidBy: {
        type: String
      },
      paidTo: {
        type: Array
      },
      action :{
        type: String
      },
      friendExpenseItemId: {

        type: String
      }
},{
  timestamps: true
})

const ExpenseItem = mongoose.model('expenseItem',ExpenseItemSchema);
export default ExpenseItem;