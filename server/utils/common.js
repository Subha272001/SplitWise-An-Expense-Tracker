export const updateBalance = (user,userBalance,balance) =>{
  console.log('gdyfytfy', userBalance);
  const splitOption = balance.splitMethod;
  const paidBy = balance.paidBy;
  const amount = balance.amount;
  
  
  let {totalBalance,youOwe,youAreOwed } = userBalance;

  if( splitOption === 'equally'){  
   if( paidBy == user.name){
     youAreOwed += (+amount/2 - youOwe);  //others have to pay me
     if(amount <= youOwe ) youOwe -= +amount/2; 
     else youOwe = 0; // i have to pay someone
   }else{
    youOwe += (+amount/2-youAreOwed);
    if(amount <= youAreOwed ) youAreOwed -= +amount/2;
    else youAreOwed = 0;
   }

  } 
  else if( splitOption === 'youOwe') {
    if(amount <= youAreOwed ) youAreOwed -= +amount;
    youOwe +=amount;
  }else {
    if(amount <= youOwe ) youOwe -= +amount;
    youAreOwed += +amount;
  }
  totalBalance = youAreOwed - youOwe;
  return {totalBalance,youOwe,youAreOwed};
}
