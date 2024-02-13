import { styled,Box } from "@mui/material";

const Component = styled(Box)`
     width: 30px;
     height: 30px;
     display: flex;
     align-items: center;
     justify-content: center;
     background: #fff;
     color: #000;
     font-weight: 600;
     border-radius: 50%;
     border: 1px solid #999
`
const UserLogo = ({name})=>{
  return (
    <Component component="span">{name.toUpperCase().split(' ').map(word=>( word[0]) ).join('')
          }</Component>
  )
}
export default UserLogo;