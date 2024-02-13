import ExpenseItem from "../models/expense-schema.js";
import RecentActivity from "../models/recent-activity-schema.js";
import User from "../models/user-schema.js";


// export const addNewExpense = async(request,response)=>{
//      try{
//       const newUserExpense =  new ExpenseItem(request.body.expense);
//       await newUserExpense.save();
//       const user = User.findOne({_id : request.body.expense.userId});

//        user.friends.filter(friend => friend.id === request.body.friendId ).push(newUserExpense._id);

//       const newFriendExpenseData = request.body.expense; 

//       newFriendExpenseData.userId = request.body.friendId;

//       const newFriendExpense =  new ExpenseItem(newFriendExpenseData);
//       await newFriendExpense.save();

//       const userFriend = User.findOne({_id : request.body.friendId});
      
//       userFriend.friends.filter(friend => friend.id === request.body.expense.userId ).push(newUserExpense._id);



//       const newUserActivity = new RecentActivity({
//         userId : newUserExpense.userId,
//         expenses: [{expenseId: newUserExpense._id , action: 'added'}]
//        })
//        await newUserActivity.save();

//        const newFriendActivity = new RecentActivity({
//         userId : newFriendExpense.userId,
//         expenses: [{expenseId: newFriendExpense._id , action: 'added'}]
//        })
//        await newFriendActivity.save();
      

//       return response.status(200).json({message: 'expense has been sent successfully', data : newUserExpense});

//      }catch(error){
//         return response.status(500).json(error.message);
//      }
// }

export const addNewExpense = async (request, response) => {
  try {
      // Create a new expense for the user
      const newUserExpense = new ExpenseItem(request.body.expense);
      await newUserExpense.save();

      // Create a new expense for the friend
      const newFriendExpenseData = { ...request.body.expense, userId: request.body.friendId };
      const newFriendExpense = new ExpenseItem(newFriendExpenseData);
      await newFriendExpense.save();

  

      await ExpenseItem.findByIdAndUpdate(newUserExpense._id, {friendExpenseItemId : newFriendExpense._id});

      await ExpenseItem.findByIdAndUpdate(newFriendExpense._id, {friendExpenseItemId : newUserExpense._id});

      console.log('userrrr',newFriendExpense);

      // Create recent activity for the user
      const newUserActivity = new RecentActivity({
          userId: newUserExpense.userId,
          expenses: [{ expenseId: newUserExpense._id, action: 'added' }]
      });
      await newUserActivity.save();

      // Create recent activity for the friend
      const newFriendActivity = new RecentActivity({
          userId: newFriendExpense.userId,
          expenses: [{ expenseId: newFriendExpense._id, action: 'added' }]
      });
      await newFriendActivity.save();

      return response.status(200).json({ message: 'Expense has been sent successfully', data: newUserExpense });
  } catch (error) {
      return response.status(500).json({ message: error.message });
  }
}

export const getAllExpenses = async(request,response)=>{
  try{
      
   const expenses = await ExpenseItem.find({userId : request.params.id});
   return response.status(200).json(expenses);
  }catch(error){
    return response.status(500).json(error.message);
  }
}

export const getExpenses = async(request,response)=>{
  try{
      
      const expenses = await ExpenseItem.find({ userId: request.body.userId, expenseShareId : request.body.expenseShareId});
      
      return response.status(200).json(expenses);
  }catch(error){
    return response.status(500).json(error.message);
  }
}

export const deleteExpense = async(request,response)=>{
  try{
    
    await ExpenseItem.findByIdAndUpdate(request.params.id, { action: 'deleted'});

    const userExpense = await ExpenseItem.findOne({_id : request.params.id});

    const friendExpense = await ExpenseItem.findByIdAndUpdate(userExpense.friendExpenseItemId, { action: 'deleted'} );

    console.log("friendbj",userExpense);

    const newActivity = new RecentActivity({
      userId : userExpense.userId,
      expenses: [{expenseId: userExpense._id ,action: 'deleted'}]
     })
    await newActivity.save();

    const newFriendActivity = new RecentActivity({
      userId : friendExpense.userId,
      expenses: [{expenseId: friendExpense._id , action: 'deleted'}]
     })
     await newFriendActivity.save();

    return response.status(200).json({message : 'deleted successfully'});
  }catch(error){
    return response.status(500).json(error.message);
  }
}

