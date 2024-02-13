
import PersonIcon from '@mui/icons-material/Person';
import { Box,Typography,styled } from "@mui/material";
import { useEffect, useState } from 'react';
import AddFriendDialog from './AddFriendDialog';
import { useContext } from 'react';
import { DataContext } from '../../../context/DataProvider';
import { getUserFriends } from '../../../service/api';

 
const Component= styled(Box)`
  
`
const FriendTitle =  styled(Typography)`
   font-size: 16px;
   margin-left: 28px;
   color:  #999999;
   display: flex;
   align-items: center;
   cursor: pointer;
   &: hover{
    color: #333333;
  }
  
`
const StyledBadge= styled(PersonIcon)`   font-size: 18px;
    margin-right: 2px;
    
`
const FriendHead= styled(Box)`
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
const Friends = () =>{
  
  const [open,setOpen] = useState(false);
  const {user,setFriend, setSelect,userFriends,setUserFriends} = useContext(DataContext);
 

  useEffect(()=>{
    const fetchData = async ()=>{
      
      let response = await getUserFriends({userId :user._id});
      setUserFriends(response.data.data);
      
    }
    fetchData();
   },[user]);

   const setValue = (e)=>{
    // setSelect(e.target.outerText)
    setSelect('friend');
   }

  const openAddFriendDialog =()=>{
        setOpen(true); 
           
  }

   return (
    <Component>
         <FriendHead>
           <Typography>FRIENDS</Typography>
           <Typography onClick = {()=> openAddFriendDialog()} >+add</Typography>
         </FriendHead>
         {
         userFriends.map(friend =>(
         <FriendTitle onClick={(e)=>{setValue(e); setFriend(friend)}}>
             <StyledBadge />{friend.name}
         </FriendTitle>
          ))}
         <AddFriendDialog open={open} setOpen={setOpen}/>
    </Component>
   )
}
export default Friends;