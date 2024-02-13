import Balance from "../models/balance-schema.js";
import User from "../models/user-schema.js";
import { updateBalance } from "../utils/common.js";


export const createBalance = async(request,response) =>{
 try{
  console.log('bal', request.body);
  const userBalance= await Balance.findOne({ userId : request.body.userId});
 

  if(userBalance){
    response.status(200).json({msg: 'balance already exist'});
      return;
   }

   const newUserBalance = new Balance({ userId: request.body.userId,totalBalance: 0.00, youOwe : 0.00, youAreOwed: 0.00});
   await newUserBalance.save();
 

   response.status(200).json({data : newUserBalance});
  }catch(error){
    response.status(500).json({message: error.message});
  }


}

export const addBalance = async(request,response)=>{
  try{
    console.log("jhfyf",request.body);
    const userBalance = await Balance.findOne({ userId : request.body.userId});
    const user = await User.findOne({_id : request.body.userId});
    
    const friendBalance = await Balance.findOne({ userId : request.body.friendId});
    const friend = await User.findOne({_id : request.body.friendId});
    
  
     const updatedUserBalance = updateBalance(user, userBalance, request.body.balance);
     const updatedFriendBalance = updateBalance(friend, friendBalance, request.body.balance);

     await Balance.findByIdAndUpdate(userBalance._id, updatedUserBalance);
     await Balance.findByIdAndUpdate(friendBalance._id, updatedFriendBalance);

    response.status(200).json({data : userBalance});

  }catch(error){
    response.status(500).json({message: error.message});
  }
  
}

export const getBalance = async(request,response)=>{
  try{
      
      const balance = await Balance.find({userId: request.params.id});
      console.log('balance', balance);
      return response.status(200).json({data: balance});
  }catch(error){
    return response.status(500).json(error.message);
  }
}

