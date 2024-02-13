import { Box, Typography, styled } from "@mui/material";
import { FormatMonth, FormatYear, FormatDate, date } from "../../utils/date";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { deleteExpense } from "../../service/api";


const Component = styled(Box)`
     color: #999999;
     display: flex;
     height: 70px;
     &: hover {
      .delete-button {
          visibility: visible;6666666666666666666666666666666666666 
      }
  }
     
`
const ExpenseInfo  = styled(Box)`
   display: flex;
   width: 55%;
   align-items: center;
  
`
const Date = styled(Box)`
  padding: 10px;
  text-align: center;
  font-weight: 600;
  & : first-child{
     font-size: 12px;
  }
  & : second-child{
    font-size: 18px;
  }
  & : last-child{
    font-size: 12px;
  }
`
const Delete = styled(Box)`
margin-left: auto;
font-size: 20px;
margin-top: 15px;
margin-right: 10px;
text-decoration: underline;
color: black;
visibility: hidden;
cursor: pointer;

`
const Description = styled(Box)`
    padding-left: 5px;
`
const ExpenseAmount = styled(Box)`
     display: flex;
     width: 45%; 
     align-items: center;
        
`
const PaidBy = styled(Box)`
   text-align: right;
   padding-right: 10px;
   width: 100%;
   
`
const PaidTo = styled(Box)`
   padding-left: 5px;
   width: 100%;
`
const Image = styled('img')({
    width: 50,
})
const ExpenseItem = ({expenses}) =>{
  
  const image = 'https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png';

  const {user,friend,setItemDelete} = useContext(DataContext);

  const deleteUserExpense = async(expenseId)=>{
     let response = await deleteExpense(expenseId);

  }
     return (
      <>
      { 
        expenses && expenses.map((expense) =>  expense.action === 'added' && (
         
           <Component >
          <ExpenseInfo>
            <Date>
               <Box>{FormatMonth(expense.createdAt)}</Box>
               <Box>{FormatDate(expense.createdAt)}</Box>
               <Box>{FormatYear(expense.createdAt)}</Box>
            </Date>
            <Image src={image} alt=""  />
            <Description>
                <Typography style={{fontSize: 20, color: '#333333'}}>{expense.description}</Typography>
            </Description>
          </ExpenseInfo>
          <ExpenseAmount>
            { expense.splitMethod === 'equally' ? <><PaidBy>
            <Typography style={{fontSize: 14}}>{expense.paidBy} paid</Typography>
            <Box style={{ fontWeight: 'bold',fontSize: '16px',color: '#333333'}}>${expense.amount}</Box>
          </PaidBy>
          <PaidTo>
          <Typography style={{fontSize: 14}}>{expense.paidBy} lent {expense.paidTo.map((paidto)=> <span>{paidto}</span>)}</Typography>
          { expense.paidBy === user.name ? <Box style={{color: '#5bc5a7', fontWeight: 'bold',fontSize: '16px'}}>${expense.amount/2}</Box> : <Box style={{color: '#ff652f', fontWeight: 'bold',fontSize: '16px'}}>${expense.amount/2}</Box>}
          </PaidTo>
          </> :
          <>
          <PaidBy>
            <Typography style={{fontSize: 14}}>{expense.paidBy} paid</Typography>
            <Box style={{ fontWeight: 'bold',fontSize: '16px',color: '#333333'}}>${expense.amount}</Box>
          </PaidBy>
          <PaidTo>
          <Typography style={{fontSize: 14}}>{expense.paidBy} lent {expense.paidTo.map((paidto)=> <span>{paidto}</span>)}</Typography>
          { expense.paidBy === user.name ? <Box style={{color: '#5bc5a7', fontWeight: 'bold',fontSize: '16px'}}>${expense.amount}</Box> : <Box style={{color: '#ff652f', fontWeight: 'bold',fontSize: '16px'}}>${expense.amount}</Box>}
            
          </PaidTo>
          </>}
          
          </ExpenseAmount>
          <Delete  onClick={()=> {deleteUserExpense(expense._id); setItemDelete(prev => !prev)}} className="delete-button" >x</Delete>
         </Component>
         
        ))
         
      }
       </>
   )
}
export default ExpenseItem;