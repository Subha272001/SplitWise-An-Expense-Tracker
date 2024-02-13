import { Box, Typography, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { createBalance, getBalance } from "../../../service/api";
import { DataContext } from "../../../context/DataProvider";

const Container = styled(Box)`
    display : flex;
    justify-content: space-evenly;
    align-items: center;
    color: #999;
    height: 100px;
`
const Balance = styled(Box)`
     text-align: center;
     border-right: 1px solid #ccc;
     width: 100%;
`
const DashboardBalance = ()=>{
  
   const {user,friend} = useContext(DataContext);
   const [balance,setBalance] = useState([]);

   useEffect(()=>{
    
    const createUserBalance = async () => {
      try {
        
        await createBalance({userId: user._id});
       
      } catch (error) {
        console.error('Error fetching balance:', error.message);
      }
    }

     user?._id && createUserBalance();
    },[user?._id])

   useEffect(()=>{
    const getUserBalance = async () => {
      try {
        let data = await getBalance(user._id);
     
        
        //find balance for current user among all users
        const filteredBalance = data.data.find((balance) => balance.userId === user._id);
        console.log("filter",filteredBalance);
        setBalance(filteredBalance);
      } catch (error) {
        console.error('Error fetching balance:', error.message);
      }
    }

     user?._id && getUserBalance();
    },[user?._id])

   return (
        <Container>
        <Balance>
       <Typography>total balance</Typography>
       <Typography>${balance.totalBalance}</Typography>
      </Balance>
      <Balance>
        <Typography>you owe</Typography>
        <Typography>${balance.youOwe}</Typography>
      </Balance>
      <Balance>
         <Typography>you are owed</Typography>
         <Typography>${balance.youAreOwed}</Typography>
      </Balance>
      </Container>
      
   
   )
}
export default DashboardBalance;