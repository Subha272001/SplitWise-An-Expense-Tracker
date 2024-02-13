import express from 'express';
import { userSignUp, userLogin, addFriend,getFriends } from '../controller/user-controller.js';
import { getShareExpense, startShareExpense } from '../controller/expenseshare-controller.js';
import { addNewExpense, deleteExpense, getAllExpenses, getExpenses } from '../controller/expense-controller.js';
import { addBalance, createBalance, getBalance } from '../controller/balance-controller.js';
import { getRecentActivity } from '../controller/recent-activity-controller.js';

const router = express.Router();

router.post('/signup',userSignUp);
router.post('/login',userLogin);
router.post('/addfriend',addFriend);
router.post('/share',startShareExpense);
router.post('/getfriends',getFriends);
router.post('/getshare',getShareExpense);
router.post('/addexpense',addNewExpense);
router.post('/balance/create/',createBalance);
router.post('/balance/add',addBalance);
router.post('/expense/get',getExpenses);
router.get('/allexpense/get/:id',getAllExpenses);
router.get('/balance/get/:id',getBalance);
router.get('/expense/delete/:id',deleteExpense);
router.get('/recent/get/:id',getRecentActivity);
export default router;