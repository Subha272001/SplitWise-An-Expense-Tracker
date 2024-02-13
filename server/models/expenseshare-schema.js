import mongoose from'mongoose';

const ExpenseShareSchema = mongoose.Schema({
  members: {
    type: Array,
    require: true
  }
})

const ExpenseShare = mongoose.model('expenseshare', ExpenseShareSchema);
export default ExpenseShare;