import { TextField,Box,Typography ,styled,Button} from "@mui/material";
import { useContext, useState } from "react";
import { userSignUp } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import { Link } from 'react-router-dom';

const Component= styled(Box)`
   margin-top:50px;
   border: solid 1px rgb(192,192,192);
   border-radius: 10px;
   padding: 40px;
}
`
const Fields= styled(TextField)`
    display: block;
    padding-bottom: 20px;
`

const Label = styled(Typography)`
    padding-bottom: 6px;
    padding-left: 2px;
`
const SubmitButton = styled(Button)`
    width: 100%;
`
const SignUpLink = styled(Link)`

`
const signUpInitialValues = {
    name: '',
    email:'',
    password:''
}
const SignUpForm = ()=>{
  const { setAccount,setUser} = useContext(DataContext);

  const [signUp, setSignUp] = useState(signUpInitialValues);

  const onValueChange = (e)=>{
    setSignUp({...signUp,[e.target.name]: e.target.value});
  }
  const signUpUser = async()=>{
     let response = await userSignUp(signUp);
     setAccount(signUp.name);
     setUser(response.data.data);
  }


  return (
    <Component>
      <Label>Name</Label>
      <Fields  
      required            id="outlined-text-input" label="Required" 
      type="text"
      name='name'
      variant="outlined"
      onChange ={(e)=> onValueChange(e)} 
      />
      <Label>Email</Label>
      <Fields  
      required            id="outlined-email-input" label="Required" 
      type="email"
      name='email'
      variant="outlined" 
      onChange ={(e)=> onValueChange(e)}
      />
     <Label>Password</Label>
     <Fields
       required
        id="outlined-password-input"
        label="Required"
        type="password"
        name='password'
        variant="outlined"
        onChange ={(e)=> onValueChange(e)}
    />
    <SignUpLink to='/home' >
      <SubmitButton onClick={()=> signUpUser()}
      variant="contained">SIGN UP </ SubmitButton>
    </SignUpLink>
    
  </Component>
  )
}
export default SignUpForm;
