import { dbconfig } from '@/config/dbconfig';
import mysql from 'mysql2/promise'
export const connectDB=async()=>{
    try{
    const connection=await mysql.createConnection(dbconfig)
    return connection;
}catch(e){
    console.log('Error connecting to Database'+e)
}   
}


