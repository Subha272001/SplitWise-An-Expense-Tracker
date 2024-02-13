import { TextField,Box,Typography ,styled,Button} from "@mui/material";
import { userLogin } from "../../service/api";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";

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
const loginInitialValues = {
  email: '',
  password: ''
}

const LoginLink = styled(Link)`
  
`
const LoginForm = ()=>{

  const { setAccount,setUser} = useContext(DataContext);
  
  const [login, setLogin] = useState(loginInitialValues);

  const onValueChange = (e)=>{
    setLogin({...login,[e.target.name]: e.target.value});
  }
  const LoginUser = async()=>{
     let response = await userLogin(login);
     setAccount(response.data.data.name);
     setUser(response.data.data);
     
  }

  return (
    <Component>
      <Label>Email</Label>
      <Fields  
      required            id="outlined-email-input" label="Required" 
      type="email"
      name='email'
      variant="outlined" 
      onChange={(e)=>onValueChange(e)}
      />
     <Label>Password</Label>
     <Fields
        id="outlined-password-input"
        label="Required"
        type="password"
        name='password'
        variant="outlined"
        onChange={(e)=>onValueChange(e)}
    />
    <LoginLink to="/home">
    <SubmitButton onClick={()=> LoginUser()} variant="contained">LOG IN</SubmitButton>
    </LoginLink>
    
  </Component>
  )
}
export default LoginForm;
