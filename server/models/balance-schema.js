import mongoose from "mongoose";

const BalanceSchema = mongoose.Schema({
     userId :{
      type: String
     },
     totalBalance : {
      type: Number
     },
     youOwe: {
      type:Number
     },
     youAreOwed: {
      type: Number
     }
});

const Balance = mongoose.model('balance',BalanceSchema);
export default Balance;