import { Dialog,Box,styled, Typography, InputBase, Button } from "@mui/material";
import { useState } from "react";
import { addUserFriend ,startShareExpense} from "../../../service/api";
import { useContext } from "react";
import { DataContext } from '../../../context/DataProvider';
const Component = styled(Box)`
    background-color: #FFFFFF;
    height: 200px;
    width: 400px;
    padding: 15px;

`
const Head = styled(Box)`
     color: #000 ;
     font-size: 24px; 
     font-weight: 600;
     background-color: #ffffff;
`
const NameField = styled(Box)`
     margin-top: 20px;
     padding: 10px;
     border: 1px solid #ccc;
     border-radius: 5px;
`
const Input= styled(InputBase)`
   margin-left: 5px;
   font-size: 14px;
`
const AddButton = styled(Button)`
    margin-top: 50px;
    margin-left: 150px;
    color: white;
    background: #fb641b;
    &: hover {
      color: white;
      background: #fb641b;
    }
`
const AddFriendDialog = ({open,setOpen})=>{
  
  const {setOpenSideBar,user} = useContext(DataContext);
   const [email,setEmail] = useState('');

  const handleClose = ()=>{
    setOpen(false);
  }
  const addFriend = async ()=>{
    
    const userId = user._id;
    const response = await addUserFriend({ userId , email});
  
    if(response){
      const res =  await startShareExpense(userId, response.data.data._id);
    }
    setOpenSideBar(false);
    
  }

  return (
    <Dialog open =
    {open} onClose={handleClose} PaperProps={ { sx: {maxWidth: 'unset', }}}
    style={{zIndex: 2000 ,background: '#fff',opacity: 0.8 }}>
       <Component>
          <Head>
             Add Friends
          </Head>
          <NameField>
              <span style={{color: '#000'}}>To:</span><Input onChange={(e) => setEmail(e.target.value)}placeholder="Enter email " />
          </NameField>
          <AddButton onClick={()=>{addFriend(); handleClose();} }>Add Friend</AddButton>
       </Component>
    </Dialog>
  )
}
export default AddFriendDialog;