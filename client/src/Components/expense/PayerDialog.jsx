import { Box,Dialog,styled,Typography } from '@mui/material';
import UserLogo from '../home/header/UserLogo';

const StyledDialog = styled(Dialog)`
    margin-left: 800px;
    height: 540px;
`
const Component = styled(Box)`
    height: 200px;
    width: 350px;
`
const PayerHead = styled(Box)`
display: flex;
align-items: center;
color: white;
background: #00A899;
padding: 13px 10px;
border-bottom: 1px solid #36977b;
text-shadow: 0 -1px 0 #318a71;
font-size: 18px;
font-weight: bold;
`
const PayerList = styled(Box)`
    margin: 5px 0 0 5px ;

`

const User = styled(Box)`
    margin-bottom: 10px;
    cursor: pointer;
    display:flex;
    align-items: center;
    & > img {
       padding-right: 5px;
    }
    & > p {
       text-transform: capitalize;
    }
   
`
const PayerDialog=({open,setOpen,payers,setCurrentPayer})=>{

  const handleClose = ()=>{
    setOpen(false);
  }

 return( <StyledDialog open =
    {open} onClose={handleClose} PaperProps={ { sx: {maxWidth: 'unset' }}}
    BackdropProps={{ invisible: true }}>
    <Component>
            <PayerHead>
                 ChoosePayer
                 <Box onClick={()=> handleClose()} style={{marginLeft: 'auto',fontSize: 20,marginRight: 5,cursor: 'pointer'}}>x</Box>
            </PayerHead>
            <PayerList>
                 {
                    payers.map(payer =>(
                      <User><UserLogo  name={payer.name}/> <Typography onClick={()=>{setCurrentPayer(payer.name); setOpen(false)}}style={{marginLeft: 5 }}>{payer.name}</Typography> </User>
                    ))
                  }
            </PayerList>
    </Component>
   
  </StyledDialog>
 )
}
export default PayerDialog;