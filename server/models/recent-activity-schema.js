import mongoose from "mongoose";

const RecentActivitySchema = mongoose.Schema({
  userId: {
    type: String
  },
  expenses: {
    type: Array
  }
    
  },{
  timestamps: true
})
const RecentActivity = mongoose.model('recentactivity', RecentActivitySchema);
export default RecentActivity;