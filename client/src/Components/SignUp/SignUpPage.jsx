import { Box,styled } from "@mui/material";
import Header from "../Header";
import SignUpForm from "./SignUpForm";

const Component = styled(Box)`
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
`
const SignUpPage = ()=> {
  
   return(
    <Component>
      <Header/>
      <SignUpForm/>
    </Component>
   )
}
export default SignUpPage;