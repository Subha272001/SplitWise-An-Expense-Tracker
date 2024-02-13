import axios from 'axios';

const URL = 'http://localhost:8080';

export const userSignUp = async(data)=>{
  try{
    return await axios.post(`${URL}/signup`,data);
  }catch(error){
     console.log('Error while calling userSignUp API', error.message);
  }
}

export const userLogin = async(data)=>{
  try{
    return await axios.post(`${URL}/login`,data);
  }catch(error){
     console.log('Error while calling userLogin API', error.message);
  }
}
export const addUserFriend = async(data)=>{
  try{
    
    return await axios.post(`${URL}/addfriend`,data);
    
  }catch(error){
     console.log('Error while calling addUserFriend API', error.message);
  }
}
export const startShareExpense = async(userId, friendId)=>{
   try{  
     return await axios.post(`${URL}/share`,{userId, friendId});

   }catch(error){
    console.log('Error while calling startShareExpense API', error.message);
   }
}

export const getUserFriends = async(data)=>{
  try{
     
      return await axios.post(`${URL}/getfriends`,data);
  }catch(error){
      console.log('Error while calling getfriends API', error.message);
  }
}

export const getShareExpense = async(data)=>{
   try{
      return await axios.post(`${URL}/getshare`,data);
   }catch(error){
    console.log('Error while calling getshare API', error.message); 
   }
}

export const addNewExpense = async(data)=>{
   try{
    return await axios.post(`${URL}/addexpense`,data);
   }catch(error){
    console.log('Error while calling addExpense API', error.message);
   }
}

export const getExpenses = async(data)=>{
  try{ 
    
     let response = await axios.post(`${URL}/expense/get`,data);
     return response.data;
  }catch(error){
   console.log('Error while calling getExpenses API', error.message)
  }
}

export const getAllExpenses = async(id)=>{
  try{ 
    
     let response = await axios.get(`${URL}/allexpense/get/${id}`);
     return response.data;
  }catch(error){
   console.log('Error while calling getExpenses API', error.message)
  }
}

export const createBalance = async(data)=>{
  try{
    
    let response = await axios.post(`${URL}/balance/create/`,data);
    console.log(response);
    return response.data;
  }catch(error){
   console.log('Error while calling createBalance API', error.message);
  }
}

export const addBalance = async(data)=>{
  try{
   return await axios.post(`${URL}/balance/add`,data);
  }catch(error){
   console.log('Error while calling addBalance API', error.message);
  }
}

export const getBalance = async(id)=>{
  try{ 
     let response = await axios.get(`${URL}/balance/get/${id}`);
     return response.data;
  }catch(error){
   console.log('Error while calling getExpenses API', error.message)
  }
}

export const deleteExpense = async(id) =>{
   try{
    let response = await axios.get(`${URL}/expense/delete/${id}`);
    return response.data;
   }catch(error){
    console.log('Error while calling deleteExpense API', error.message)
   }
}

export const getRecentActivity = async(id)=>{
  try{ 
    
     let response = await axios.get(`${URL}/recent/get/${id}`);
     return response.data;
  }catch(error){
   console.log('Error while calling getRecentActivity API', error.message)
  }
}
