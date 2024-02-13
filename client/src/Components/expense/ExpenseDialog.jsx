import DescriptionIcon from '@mui/icons-material/Description';
import { Button,Box, Dialog, InputBase, Typography, styled } from "@mui/material";
import AddMember from './AddMember';
import { useContext,useEffect,useState } from 'react';
import { DataContext } from '../../context/DataProvider';
import PayerDialog from './PayerDialog';
import SplitOptionDialog from './SplitOptionDialog';
import { addNewExpense, getExpenses,addBalance } from '../../service/api';


const Head=styled(Box)`
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
const Component = styled(Box)`
         width: 400px;
`
const Expense = styled(Box)`

`

const Amount = styled(Box)`
      height: 150px;
      display: flex; 
      align-items: center;
      margin-left: 0px;
      margin-left: 40px;
`
const Description = styled(InputBase)`  
     
     display: block;
     margin-bottom: 5px;
     font-size: 20px;
     width: 70%;
     border-bottom: 1px dashed #ccc;

`
const Price =  styled(InputBase)`
    font-size: 40px;
    width: 70%;
`
const Text = styled(Typography)`
   text-align: center;
   
`
const TextInput = styled(Button)`
     border-radius: 20px;
     border: 1px dashed #ccc;
     padding: 2px;
     color: #00A899;

`
const Buttons = styled(Box)`
    margin-top: 20px;
    height: 45px;
    width: 180px;
    justify-content- center;
    margin-left : auto;
`
const Cancel = styled(Button)`
    color: #333;
    border: 2px solid ;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    margin-left: 15px;
`
const Save = styled(Button)`
   background-color: #00A899; 
   color: #fff;
   margin-left: 5px;
   &: hover {
    background-color: #00A899; 
    color: #fff;
   }
   
`
const Member= styled(Box)`
    padding: 13px 10px 0 10px;
    font-size: 14px;
    display: flex;
    border-bottom: 1px solid #ccc;
`

const ExpenseDialog  = ({open, setOpen,friend,shareExpense,setExpenses})=>{
  const [text, setText] = useState('');
  const {user,itemDelete,newExpenseFlag,setNewExpenseFlag} = useContext(DataContext);
  const[payers,setPayers] = useState([]);
  const[splitOpen,setSplitOpen] = useState(false);
  const [splitOption,setSplitOption] = useState('equally');
  
  const [currentPayer,setCurrentPayer] = useState(user?.name || '')
  const[payerOpen,setPayerOpen] = useState(false);
 
  const[description,setDescription] = useState('');
  const[amount,setAmount]= useState(0);
  
   
  useEffect(()=>{
    const getExpenseDetails = async () => {
      try {
        
        let data = await getExpenses(
          {userId: user._id , expenseShareId
            : shareExpense.id} );
        console.log('data', data);
        setExpenses(data);
      } catch (error) {
        console.error('Error fetching expenses:', error.message);
      }
    }

     shareExpense?.id && getExpenseDetails();
    },[friend?._id,shareExpense?.id, newExpenseFlag,itemDelete ])

  useEffect(()=>{
    const setAllPayers = ()=>{
      setPayers([user, friend]?.filter(Boolean));
    }
    setAllPayers();
  },[friend?.id,shareExpense?.id]);

  const onDescChange = (e)=>{
    setDescription(e.target.value);

  }
  const onAmountChange = (e)=>{
    setAmount(e.target.value);
  }

  
  const handleClose = ()=>{
    setOpen(false);
  }
  const openPayerDialog =()=>{
    setPayerOpen(true);
  }
  const openSplitOptionsDialog=()=>{
     friend && setSplitOpen(true);
  }
  const addExpense= async()=>{
     
     let expense = {
          expenseShareId : shareExpense?.id,
          userId: user._id,
          description : description,
          amount: amount,
          splitMethod: splitOption,
          paidBy: currentPayer,
          paidTo: payers.filter((payer)=> payer.name !== currentPayer).map((payer) => payer.name),
          action: 'added',
     }

    let balance = {
          amount: amount,
          splitMethod: splitOption,
          paidBy: currentPayer,
    }
    console.log('friend',friend);
    await addNewExpense({expense ,friendId : friend?.id});
    await addBalance({balance, userId: user?._id  ,friendId : friend?.id});

    setNewExpenseFlag(prev => !prev);

  }
  const price = 50;
  return (
    <>
    <Dialog open =
    {open} onClose={handleClose} PaperProps={ { sx: {maxWidth: 'unset' , }}}>
       <Component>
        <Head>
          Add an Expense
          <Box onClick={()=> handleClose()} style={{marginLeft: 'auto',fontSize: 20,marginRight: 5,cursor: 'pointer'}}>x</Box>
        </Head>
        <Expense>
          {
            friend ? 
            <Member>
              <Typography style={{width: '110px'}}>With you and :</Typography>
              <InputBase style= {{fontSize: 14, width: '290px', paddingLeft: 5}}
              value={friend.name}
              placeholder="Enter name or email address"/>
              
            </Member>: <AddMember setPayers={setPayers} text={text} setText={setText} /> 
          }
          
          <Amount>
            <Box >
              <DescriptionIcon style={{height: '100%', fontSize: 90}}/>
            </Box>
            <Box>
              <Description placeholder="Enter a description" name ='description' onChange ={(e)=> onDescChange(e)} />
              <Box style={{borderBottom : '1px dashed #ccc', width: 170}}>
              <span style={{fontSize: 40, }}>$</span><Price placeholder="0.00" onChange={(e)=> onAmountChange(e)} />
              </Box>
            </Box>
          </Amount>
          
            { 
            splitOption === 'equally'?
              <Text>
              Paid by<TextInput onClick ={()=>openPayerDialog()}>{currentPayer}</TextInput>split
              <TextInput onClick={()=>openSplitOptionsDialog()}>equally</TextInput>
              </Text> :
              <Text>
              {user && friend && (
                <>
                  {currentPayer === user.name ? (
                    <Typography>{user.name} owes {friend.name} ${0.00}</Typography>
                  ) : (
                    <Typography>{friend.name} owes {user.name} ${0.00}</Typography>
                  )}
                </>
              )}
            </Text>
            }
          <Text>
              (${price}/person)
          </Text>
          <Box>
                 
          </Box>
          <Buttons>
            <Cancel onClick={handleClose}>Cancel</Cancel>
            <Save onClick={()=>{addExpense(); handleClose();}}>Save</Save>
          </Buttons>
        </Expense>
       </Component>
    </Dialog>
    <PayerDialog open={payerOpen} setOpen={setPayerOpen} payers={payers} setCurrentPayer = {setCurrentPayer}/>
    <SplitOptionDialog open={splitOpen} setOpen={setSplitOpen} setCurrentPayer={setCurrentPayer} setSplitOption={setSplitOption} user={user} friend={friend}/>
    </>
  )
}
export default ExpenseDialog;