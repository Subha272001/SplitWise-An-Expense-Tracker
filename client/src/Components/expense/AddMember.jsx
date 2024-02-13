import {Box,Typography,InputBase,styled,List,ListItem} from '@mui/material';
import { useContext,useState } from 'react';
import { DataContext } from '../../context/DataProvider';

const Component= styled(Box)`
    padding: 13px 10px 0 10px;
    font-size: 14px;
    display: flex;
    border-bottom: 1px solid #ccc;
`
const ListWrapper = styled(List)`
    position: absolute;
    background: #FFFFFF;
    color: #000;
    margin-top: 24px;
    margin-left: 100px;
    cursor: pointer;
    z-index: 1500;
    
`

const AddMember = ({text,setText,setPayers})=>{
    
    const {user, userFriends } = useContext(DataContext);
    const[open,setOpen] = useState(false);
    
    const getText=(text)=>{
      setText(text);
    }
    return (
      <Component>
      <Typography style={{width: '110px'}}>With you and :</Typography>
      <>
      <InputBase style= {{fontSize: 14, width: '290px', paddingLeft: 5}}
      onChange={(e)=> {getText(e.target.value); setOpen(true)}} value={text}placeholder="Enter name or email address"/>
      {
            text && open && <ListWrapper>
               {
                  userFriends.filter(friend => friend.name.toLowerCase().includes(text.toLowerCase())). map(friend =>(
                     <ListItem>
                        <Typography onClick={()=>{setText(friend.name); setPayers([user,friend]); setOpen(false)}}
                        >{friend.name}</Typography>
                     </ListItem>
                  ))
               }
            </ListWrapper>
         }
         </>
    </Component>
    )
}
export default AddMember;