import { Box,styled } from "@mui/material";
import Header from "../Header";
import LoginForm from "./LoginForm";

const Component = styled(Box)`
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
`
const LoginPage = ()=> {
   return(
    <Component>
      <Header/>
      <LoginForm/>
    </Component>
   )
}
export default LoginPage;