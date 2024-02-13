import {useEffect, useState} from 'react';
import { Box, Button,Typography,styled } from "@mui/material";
import ExpenseDialog from '../../expense/ExpenseDialog';
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
      font-size: 30px;
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


const DashboardHeader = ()=>{
  const [open, setOpen] = useState(false);
  

  const openExpenseDialog = ()=>{
      setOpen(true);
  }
     return (
      <>
      <Container>
        <Typography> Dashboard </Typography>
        <ButtonContainer>
        <ExpenseButton onClick = {()=> openExpenseDialog()}>Add an expense</ExpenseButton>
          <SettleButton>Settle up</SettleButton>
        </ButtonContainer>
      </Container>
      <ExpenseDialog open ={open} setOpen ={setOpen}/>
      </>
     )
}
export default DashboardHeader;