import { createContext, useState } from 'react';
export const DataContext = createContext(null);

const DataProvider = ({children}) =>{
   const [account, setAccount] = useState('');
   const [ user, setUser] = useState();
   const [friend, setFriend] = useState();
   const [select,setSelect] = useState('DashBoard');
   const [userFriends,setUserFriends] = useState([]);
   const[openSideBar, setOpenSideBar] = useState(false);
   const[expenses,setExpenses] = useState([]);
   const[allExpenses,setAllExpenses] =useState([]);
   const [itemDelete,setItemDelete] = useState(false);
   const[newExpenseFlag,setNewExpenseFlag] = useState(false);

   return(<DataContext.Provider
   value={{account,setAccount,openSideBar,setOpenSideBar,user,setUser,friend,setFriend,select,setSelect,userFriends,setUserFriends,expenses,setExpenses,allExpenses,setAllExpenses,itemDelete,setItemDelete,newExpenseFlag,setNewExpenseFlag}}>
    {children}
   </DataContext.Provider>)
}
export default DataProvider;