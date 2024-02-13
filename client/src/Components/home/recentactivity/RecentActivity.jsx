import { Box,Typography,styled } from "@mui/material";
import { useContext, useState,useEffect } from "react";
import { DataContext } from "../../../context/DataProvider";
import { getRelativeDate, isWithinLast10Days } from "../../../utils/date";
import { getAllExpenses, getRecentActivity } from "../../../service/api";
const ActivityHeader = styled(Box)`
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
const ActivityImage = styled(Box)`
   margin-top: 10px;
`
const ActivityDescription = styled(Box)`
 text-overflow: ellipsis;
 font-size: 16px;
 padding-left: 12px;
 margin-right: auto;
`
const ActivityBody = styled(Box)`
padding: 16px;
border-bottom: 1px solid #ddd;
display: flex;


`
const Image = styled('img')({
   
    height: 55,

})


const RecentActivity = ()=>{
  const {user} = useContext(DataContext);
  const { allExpenses} = useContext(DataContext);

  const[activities,setActivities] = useState([]);

  useEffect(() =>{
    const getUserRecentActivities = async()=>{
        const activity = await getRecentActivity(user._id);
        setActivities(activity);
        // console.log('activities',activities.map(activity => console.log(activity.expense[0].action, activity.action)));
      }
    user?._id && getUserRecentActivities();
},[user._id])
   
const image = 'https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png';
   

   return (
    <Box style={{color: 'black'}}>
      <ActivityHeader>
          <Content>Recent Activity</Content>
      </ActivityHeader>
          {
            activities.map(activity => <>
              { activity.action === 'added'  ? 
             <ActivityBody >
              <ActivityImage>
               <Image src={image} alt="" />
              </ActivityImage>
              <ActivityDescription>
                 <Typography style={{fontSize: 16}}>{activity.expense[0].paidBy} {activity.action} "{activity.expense[0].description}".</Typography>
                
                 
                 {activity.expense[0].paidBy === user.name ? <Typography style={{ color: 'rgb(91, 197, 167)',fontSize: 16}}>You {activity.expense[0].paidBy === user.name ? <span>get backs</span> : <span>owe</span>} ${activity.expense[0].splitMethod === 'equally' ? activity.expense[0].amount/2 : activity.expense[0].amount}</Typography>
                 :
                 <Typography style={{ color: 'rgb(255, 101, 47)',fontSize: 16}}>You {activity.expense[0].paidBy === user.name ? <span>get backs</span> : <span>owe</span>} ${activity.expense[0].splitMethod === 'equally' ? activity.expense[0].amount/2 : activity.expense[0].amount}</Typography> }

                <Typography style={{fontSize: 12,color: '#999999'}}>{getRelativeDate(activity.expense[0].createdAt)}</Typography>
              </ActivityDescription>
            </ActivityBody>
                
                 :

              <ActivityBody>
              <ActivityImage>
               <Image src={image} alt="" />
              </ActivityImage>
              <ActivityDescription>
                 <Typography style={{fontSize: 16}}>{activity.expense[0].paidBy} {activity.expense[0].action} "{activity.expense[0].description}".</Typography>
                 
                 {activity.expense[0].paidBy === user.name ? <Typography style={{ color: 'rgb(91, 197, 167)',fontSize: 16,textDecoration : 'line-through'}}>You {activity.expense[0].paidBy === user.name ? <span>get backs</span> : <span>owe</span>} ${activity.expense[0].splitMethod === 'equally' ? activity.expense[0].amount/2 : activity.expense[0].amount}</Typography>
                 :
                 <Typography style={{ color: 'rgb(255, 101, 47)',fontSize: 16,textDecoration : 'line-through'}}>You {activity.expense[0].paidBy === user.name ? <span>get backs</span> : <span>owe</span>} ${activity.expense[0].splitMethod === 'equally' ? activity.expense[0].amount/2 : activity.expense[0].amount}</Typography> }
                 
                 <Typography style={{fontSize: 12,color: '#999999'}}>{getRelativeDate(activity.expense[0].createdAt)}</Typography>
              </ActivityDescription>
         </ActivityBody>
           }
            </>)
          }
      
    </Box>
  
   )
 }

export default RecentActivity;