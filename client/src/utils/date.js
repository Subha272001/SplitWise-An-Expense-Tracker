






export const FormatDate = (createdAt)=>{
  const currentDate = new Date(createdAt);
 
  const day = currentDate.getDate();

  return day;

}

export const FormatMonth = (createdAt)=>{
  const currentDate = new Date(createdAt);
  const monthNumber = currentDate.getMonth() + 1;
  
  const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const monthString = monthNames[monthNumber - 1].substring(0, 3).toUpperCase(); 
  return monthString;

}
export const FormatYear = (createdAt)=>{
  const currentDate = new Date(createdAt);
  const year = currentDate.getFullYear();
   
  return year;

}


export const getRelativeDate =(dateString) => {
  
  var dateToCheck = new Date(dateString);

  const today = new Date();

  const differenceInMilliseconds = today - dateToCheck;

  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  if (differenceInDays === 0) {
      return "Today";
  } else if (differenceInDays === 1) {
      return "Yesterday";
  } else if (differenceInDays > 1 && differenceInDays <= 10) {
      return differenceInDays + " days ago";
  } 
}

export const isWithinLast10Days =(date)=> {
  const today = new Date();
  const tenDaysAgo = new Date();
  date = new Date(date);
  tenDaysAgo.setDate(today.getDate() - 10);

  const todayWithoutTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const tenDaysAgoWithoutTime = new Date(tenDaysAgo.getFullYear(), tenDaysAgo.getMonth(), tenDaysAgo.getDate());
  const dateWithoutTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  return dateWithoutTime >= tenDaysAgoWithoutTime && dateWithoutTime <= todayWithoutTime;
}
