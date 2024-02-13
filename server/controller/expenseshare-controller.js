import ExpenseShare from "../models/expenseshare-schema.js";


export const startShareExpense= async(request,response)=>{
   try{
      const userId = request.body.userId;
      const friendId = request.body.friendId;

      const exist = await ExpenseShare.findOne({members:{$all:[userId, friendId]}});
    
      if(exist){
       return response.status(200).json("already exists");
      }
      const newShareExpense = new ExpenseShare({
       members: [userId, friendId]
      })

       await newShareExpense.save();
       return response.status(200).json('sharing start successfully');

   }catch(error){
      return response.status(500).json(error.message);
   }
}

export const getShareExpense = async(request,response)=>{
   try{
      const userId = request.body.userId;
      const friendId = request.body.friendId;
      
      const expense = await ExpenseShare.findOne({members:{$all:[userId, friendId]}});
      
      const expenseId = expense._id;

      response.status(200).json({id : expenseId });
   }catch(error){
      return response.status(500).json(error.message);
   }

}

