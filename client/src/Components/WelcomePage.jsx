import { Box,styled} from "@mui/material";
import Header from "./Header";
import Main from "./Main";


const Component = styled(Box)`
     height: 85vh;
`
const WelcomePage =()=> {
  return (
    <Component>
      <Header/>
      <Main/>
    </Component>
  )
}

export default WelcomePage;