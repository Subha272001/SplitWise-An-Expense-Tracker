import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection  = async()=>{
  const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-6j8bq1d-shard-00-00.8glfzix.mongodb.net:27017,ac-6j8bq1d-shard-00-01.8glfzix.mongodb.net:27017,ac-6j8bq1d-shard-00-02.8glfzix.mongodb.net:27017/?ssl=true&replicaSet=atlas-107nam-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try{
      await mongoose.connect(URL);
      console.log("Successfully Connected");
  }catch(error){
    console.log('Error while connecting with the database',error.message);
  }
}
 export default Connection;
