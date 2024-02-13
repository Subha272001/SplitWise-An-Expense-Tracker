import { Box, styled ,Typography} from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import { FormatDate, FormatMonth, FormatYear } from "../../../utils/date";
import ExpenseItem from "../../expense/ExpenseItem";
import MonthComponent from "../../expense/MonthComponent";

const Container = styled(Box)`

`
const AllExpenseHeader = styled(Box)`
   white-space: nowrap;
   text-overflow: ellipsis;
   height: 40px;
   z-index: 9;
   background: #eee;
   padding: 13px 10px 10px;
   border-bottom: 1px solid #ddd;

`

const Content = styled(Typography)`
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
font-size: 24px !important;
line-height: 38px;
height: 38px;
display: inline-block;
vertical-align: middle;
color: #333;
padding-left: 5px;
font-family: inherit;
font-weight: bold;
`

const AllExpenseBody = styled(Box)`

`



const AllExpense = ()=>{

  const { allExpenses, user} = useContext(DataContext);

   return (
   <Container>
      <AllExpenseHeader>
             <Content>All Expense</Content>
      </AllExpenseHeader>
      <AllExpenseBody>
      <>
      <ExpenseItem expenses = {allExpenses} />
      </>
      </AllExpenseBody>
   </Container>
   )
}
export default AllExpense;