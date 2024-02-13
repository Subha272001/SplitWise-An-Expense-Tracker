import { Drawer,Box, Typography,styled} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Groups from "./Groups";
import Friends from "./Friends";
import { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";


const Header = styled(Box)`
  background: #ffffff;
  height:50px;
  color: #000000;
  display: flex;
  & >svg {
    margin-top: 5px;
    padding: 15px;
    font-weight:600;
  }
` 
const drawerStyle={
  width: '20%',
  height: '98%',
  boxShadow: 'none',
  background: '#FFFFFF'

}


const Element = styled(Typography)`
     margin-left: 30px;
     margin-bottom: 5px;
     font-size: 16px;
     cursor: pointer;
     color: #999999;
     &: hover{
       color: #333333;
     }
     
`

const SideBar = ({open,setOpen})=>{
  
  const {select,setSelect} = useContext(DataContext);

  const handleClose = ()=>{
   setOpen(false);
  }
  const setValue = (e)=>{
    setSelect(e.target.innerText);
    console.log(select);
}
  return (
   <Drawer 
       open={open}
       onClose={handleClose}
       PaperProps={{sx: drawerStyle}}
       style={{zIndex: 1500}}
   >
     <Header>
       <ArrowBack onClick={()=>setOpen(false)}/>
       
     </Header>
     <Box>
       <Element onClick={(e)=>setValue(e)}>DashBoard</Element>
       <Element onClick={(e)=>setValue(e)}>Recent Activity</Element>
       <Element onClick={(e)=>setValue(e)}>All Expenses</Element> 
       <Groups/>
       <Friends/>
     </Box>
     
   </Drawer>
   
  )
}
export default SideBar;