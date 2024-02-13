import { Box,Button,Dialog,styled,Typography } from '@mui/material';
import UserLogo from '../home/header/UserLogo';
import { useState } from 'react';

const StyledDialog = styled(Dialog)`
    margin-left: 800px;
    height: 540px;
`
const Component = styled(Box)`
    height: 200px;
    width: 350px;
`
const SplitHead = styled(Box)`
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
const SplitOptionList = styled(Box)`
    text-align: center;
    margin: 20px;
`
const StyledButton = styled(Button)`

width: 250px;
background: #f6f6f6;
border-radius: 12px;
height: 24px;
line-height: 24px;
padding: 0 5px;
border: 1px solid #ccc;
color: #666;
margin: 5px;
font-size: 13px;
cursor: pointer;
text-decoration: none;
overflow: hidden;


`
const SplitOptionDialog = ({
  open,
  setOpen,
  setCurrentPayer,
  setSplitOption,
  user,
  friend,
  splitOption,
}) => {
  const [highlightedButton, setHighlightedButton] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonClick = (option) => {
    setSplitOption(option);
    setCurrentPayer(option === 'youOwe' ? friend.name : user.name);
    setHighlightedButton(option);
  };

  const buttonStyle = (option) => ({
    width: '250px',
    backgroundColor: highlightedButton === option ? '#5cc5a7' : '#f6f6f6',
    borderRadius: '12px',
    height: '24px',
    lineHeight: '24px',
    padding: '0 5px',
    border: '1px solid #ccc',
    color: highlightedButton === option ? '#fff' : '#666',
    margin: '5px',
    fontSize: '13px',
    cursor: 'pointer',
    textDecoration: 'none',
    overflow: 'hidden',
  });

  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: 'unset' } }}
      BackdropProps={{ invisible: true }}
    >
      <Component>
            <SplitHead>
               Choose Split Option
               <Box onClick={()=> handleClose()} style={{marginLeft: 'auto',fontSize: 20,marginRight: 5,cursor: 'pointer'}}>x</Box>
           </SplitHead>
      <SplitOptionList>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleButtonClick('equally')}
          style={buttonStyle('equally')}
        >
          Split Equally
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleButtonClick('youOwe')}
          style={buttonStyle('youOwe')}
        >
          You owe the full amount
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleButtonClick('theyOwe')}
          style={buttonStyle('theyOwe')}
        >
          They owe the full amount
        </Button>
        </SplitOptionList>
      </Component>
    </StyledDialog>
  );
};

export default SplitOptionDialog;


