import {Box, AppBar,Toolbar,styled, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

const Component = styled(AppBar)`
    background-color: #219C90;
    color: #fff;
    height: 80px;
    box-shadow: none;
    
`
const Container = styled(Toolbar)`
     margin-top: 10px;
     
`
const Buttons = styled(Box)`
      display:flex;
      margin-left: auto;
      padding-right: 100px;
      & : first-child{
        font-size: 18px;
        padding: 0 12px;
        cursor: pointer;
      }
      & : last-child{
        font-size: 18px;
        cursor: pointer;
      }
`
const Logo = styled(Box)`
   padding-left: 100px;
   font-size: 30px;
   font-family: cursive;
`
const ButtonLink = styled(Link)`
  line-height:0;
  text-decoration: none;
  color: inherit;
`

const Header = () =>{
   return (
 
    <Component>
      <Container>
         <ButtonLink to='/'>
             <Logo>
               Splitwise
             </Logo>
         </ButtonLink>
         <Buttons>
            <ButtonLink to='/login'>
               <Typography>Login</Typography>
            </ButtonLink>
            <ButtonLink to='/signup'>
               <Typography>Sign up</Typography>
            </ButtonLink>
         </Buttons>
      </Container>
     </Component>
    
   )
}
export default Header;