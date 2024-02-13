
import { LocalOffer as Badge, } from '@mui/icons-material';
import { Box,Typography,styled } from "@mui/material";
import { useContext } from 'react';
import { DataContext } from '../../../context/DataProvider';

const Component= styled(Box)`
    
`
const GroupTitle =  styled(Typography)`
   font-size: 16px;
   margin-left: 28px;
   color:  #999999;
   cursor: pointer;
   display: flex;
   align-items: center;
   &: hover{
    color: #333333;
  }
  
`
const StyledBadge= styled(Badge)`
    font-size: 14px;
    margin-right: 2px;
`
const GroupHead= styled(Box)`
  background: #F6F6F6;
  margin-left: 22px;
  margin-right: 22px;
  display: flex;
  color: #999999;
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #eee;

  &: hover{
    color: #999999;
    & : first-child{
       opacity: 1;
    }
    & : last-child{
      opacity: 1;
    }
  }
  & : first-child {
     margin-right: 10px;
     font-size: 11px;
     font-weight: 500;
     opacity: 0.6;
     
  }
   & : last-child {
    margin-left: auto;
    font-size: 11px;
    font-weight: 500;
    opacity: 0.6;
    cursor: pointer;
    &: hover{
      color: #00A899;
     }
   }
`
const Groups = () =>{
  const {setSelect} = useContext(DataContext);

  const setValue = (e)=>{
      console.log(e.target.outerText);
  }

  const GroupName = " hi"
   return (
    <Component>
         <GroupHead>
           <Typography>GROUPS</Typography>
           <Typography>+add</Typography>
         </GroupHead>
         <GroupTitle onClick={(e)=>setValue(e)}>
             <StyledBadge />{GroupName}
         </GroupTitle>
    </Component>
   )
}
export default Groups;