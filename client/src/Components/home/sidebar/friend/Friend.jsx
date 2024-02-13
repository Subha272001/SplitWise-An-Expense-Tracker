import {useContext, useEffect, useState} from 'react';
import { Box, Button,Typography,styled } from "@mui/material";
import ExpenseDialog from '../../../expense/ExpenseDialog';
import ExpenseItem from '../../../expense/ExpenseItem';
import { DataContext } from '../../../../context/DataProvider';
import { getShareExpense } from '../../../../service/api';



const Container = styled(Box)`
    display : flex;
    padding: 13px 12px ;
    border-bottom: 1px solid #ccc;
    & > div {
      margin-left: auto;
    }
    & > p {
      margin-bottom: 2px; 
      color: #333;
      font-weight: bold;
      font-size: 24px;
    }
`
const ExpenseButton = styled(Button)`
    color: white;
    margin-right: 5px;
    background: #fb641b;
    &: hover {
      color: black;
      background: white;
    }  
`
const ButtonContainer = styled(Box)`
     margin-top: 5px; 
`
const SettleButton = styled(Button)`
    color: white;
    background: #00A899;
    &: hover {
      color: black;
      background: white;
    }  
`


const Friend = ()=>{
  const [open, setOpen] = useState(false);
  const {user,friend,expenses,setExpenses,itemDelete} = useContext(DataContext);
  const[shareExpense, setShareExpense] = useState('')
  console.log('expense', expenses)
 
  useEffect(()=>{
    const getExpenseId = async()=>{
      let response = await getShareExpense({ userId: user._id, friendId: friend?.id})
      setShareExpense(response.data);
    }
    user?._id && friend?.id && getExpenseId();
},[user._id,friend?.id,itemDelete])
    
  

  const openExpenseDialog = ()=>{
      setOpen(true);
  }
     return (
      <>
      <Container>
        
        <Typography >
          {friend.name}</Typography>
        <ButtonContainer>
        <ExpenseButton onClick = {()=> openExpenseDialog()}>Add an expense</ExpenseButton>
          <SettleButton>Settle up</SettleButton>
        </ButtonContainer>
      </Container>
      <ExpenseDialog open ={open} setOpen ={setOpen} friend={friend} shareExpense={shareExpense} setExpenses={setExpenses} expenses={expenses}/>
      <ExpenseItem expenses={expenses} />
      </>
     )
}
export default Friend;