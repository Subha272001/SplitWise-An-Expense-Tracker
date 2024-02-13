import User from "../models/user-schema.js";

export const userSignUp = async(request,response)=>{
    try{
       const exist = await User.findOne({email : request.body.email});
       if(exist){
        return response.status(401).json({message: 'email already exist'})
       }
       const user = request.body;
       const newUser = new User(user);
       await newUser.save();
       response.status(200).json({data : user});
    }catch(error){
        response.status(500).json({message: error.message});
    }
}

export const userLogin = async(request,response)=>{
  try{
     const email = request.body.email;
     const password= request.body.password;
     const user = await User.findOne({email: email, password : password})

     if(user){
      return response.status(200).json({data: user});
     }else{
        return response.status(401).json('Invalid login');
     }
  }catch(error){
     response.status(500).json({message: error.message});
  }
}

export const addFriend = async(request,response) =>{
  try{
     const user = await User.findOne({ _id : request.body.userId}); 
     const friend = await User.findOne({ email : request.body.email});
     
     const userId = user._id;
     const userName = user.name;
     const friendId = friend._id;
     const friendName = friend.name;

     const exist =  user.friends.includes({id: friendId,name: friendName});
     
     if(exist){
      response.status(200).json({msg: ' already friend'});
      return;
     }else{
      user.friends.push({id: friendId, name: friendName, expenses: []});
      friend.friends.push({id: userId,name: userName,expenses: []});

      await user.save();
      await friend.save();
     
      response.status(200).json({data : friend});
     }
  }catch(error){
    response.status(500).json({message: error.message});
  }
}


export const getFriends = async(request,response) =>{
  try{
    
    const user = await User.findOne({ _id : request.body.userId});
    const friends = user.friends;
    
    return response.status(200).json({data : friends})
  }catch(error){
    response.status(500).json({message: error.message});
  }
}