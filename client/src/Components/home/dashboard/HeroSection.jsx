import { Box, styled } from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import DashboardBalance from "./DashboardBalance";
import Summary from "./Summary";
import Friend from "../sidebar/friend/Friend";
import { useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataProvider";
import RecentActivity from "../recentactivity/RecentActivity";
import AllExpense from "../allexpense/AllExpense";
import { getAllExpenses } from "../../../service/api";


const Component = styled(Box)`
    margin-top: 50px;
    background: white;
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
`
const Container = styled(Box)`
   height: 85vh;
   width: 60vw;
   color: white;
   border: 2px solid #ccc;
   border-radius: 5px;
   overflow: auto;
  
  
`
const HeroSection = ()=>{
 
  const { user ,select,itemDelete, allExpenses, setAllExpenses,newExpenseFlag} = useContext(DataContext);

  useEffect(() =>{
    const getUserAllExpenses = async()=>{
      const expenses = await getAllExpenses(user._id);
      setAllExpenses(expenses);
      
    }
    user?._id && getUserAllExpenses();
},[user?._id,itemDelete,newExpenseFlag])
   
   return (
    <>
      <Component>
        <Container>
          {
            select === 'friend' && 
            <Friend />
          }
          {
            select === 'DashBoard' && 
            <>
            <DashboardHeader/>
            <DashboardBalance/>
            <Summary/>
            </>
          }
          {
            select === 'Recent Activity' && 
            <>
             <RecentActivity/>
            </>
          }
          {
            select === 'All Expenses' && 
            <>
             <AllExpense/>
            </>
          }

          
             
             
        </Container>
      </Component>
    </>
   )
}
export default HeroSection;