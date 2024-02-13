import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   name :{
      type: String,
      required: true,
      trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
  },
  friends: {
    type: Array
  }
})

const User = mongoose.model('user',userSchema);
export default User;