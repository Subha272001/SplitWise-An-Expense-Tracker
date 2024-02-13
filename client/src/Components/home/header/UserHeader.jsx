import { Box,styled,AppBar,Toolbar} from "@mui/material";
import UserMenu from "./UserMenu";
import ListIcon from '@mui/icons-material/List';
import SideBar from "../sidebar/SideBar";
import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataProvider";


const Component = styled(AppBar)`
    background-color: #00A899;
    height: 50px;
    box-shadow: none;
    
`
const Logo = styled(Box)`
   margin-left: 10px;
`
const User = styled(Box)`
      margin-left: auto;
    
`


const UserHeader = ()=>{

  const logo = "https://www.canva.com/design/DAF52k6YjFM/nGie_C8t54mlbrGLz6l_zg/view?utm_content=DAF52k6YjFM&utm_campaign=designshare&utm_medium=link&utm_source=editor"
     
  const { openSideBar , setOpenSideBar } = useContext(DataContext);

  const toggleDrawer =()=>{
    setOpenSideBar(true);
  }

  return(
    <>
    <Component>
    
    <Toolbar>
      
       <ListIcon onClick = {()  =>toggleDrawer()} />
       <Logo>
          <img src='' alt="logo" />
       </Logo>
       <User>
         <UserMenu/>
       </User>  
    </Toolbar>
   </Component>
   
   <SideBar open ={openSideBar} setOpen={setOpenSideBar}/>
   </>
  
    
  )
}
export default UserHeader;
