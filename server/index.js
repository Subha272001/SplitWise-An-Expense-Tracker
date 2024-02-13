import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Router from './routes/route.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({extende: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Router);

const PORT = 8080;
Connection();
app.listen(PORT, ()=>{
  console.log(`Server running successfully on port ${PORT}`)
})

