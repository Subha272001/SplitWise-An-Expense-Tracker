import RecentActivity from "../models/recent-activity-schema.js"
import ExpenseItem from "../models/expense-schema.js";


export const getRecentActivity = async (request, response) => {
  try {
    const userActivities = await RecentActivity.find({ userId: request.params.id });
    console.log('userActivities', userActivities);

    const activities = [];

   
    await Promise.all(userActivities.map(async activity => {
      
      const activityExpenses = await Promise.all(activity.expenses.map(async exp => {
        const id = exp.expenseId;
        const expense = await ExpenseItem.find({ _id: id });
        console.log('expense', expense, exp.action);
        return { expense, action: exp.action };
      }));
      activities.push(...activityExpenses);
    }));

    console.log('activities', activities);
    return response.status(200).json(activities);
  } catch (error) {
    console.error('Error occurred:', error);
    return response.status(500).json({ error: error.message });
  }
}
