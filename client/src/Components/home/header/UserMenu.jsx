import { useState } from "react";
import { styled,Box,Menu, MenuItem,Typography } from "@mui/material";
import UserLogo from "./UserLogo";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";

const User = styled(Box)`
    margin-bottom: 10px;
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content: center;
    & > img {
       padding-right: 5px;
    }
    & > p {
       text-transform: capitalize;
    }
   
`
const LogoutLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const UserMenu = ()=>{
  const [open, setOpen] = useState(null);
  const {account} = useContext(DataContext);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  const name= "Subha Chauhan"
  return (
    <>
      <User
        onClick={handleClick}
      >
         <UserLogo name={account}/>
         <Typography style={{marginLeft: 5 }}>{account}</Typography>
      </User>

      <Menu
        anchorEl={open}
        open={open}
        onClose={handleClose}
      
        // anchorOrigin = {{
        //   vertical: 'bottom',
        //   horizontal: 'right'
        // }}
      
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <LogoutLink to='/'>
         <MenuItem onClick={handleClose}>Logout</MenuItem>
        </LogoutLink>
      </Menu>
    </>
  );

}
export default UserMenu;