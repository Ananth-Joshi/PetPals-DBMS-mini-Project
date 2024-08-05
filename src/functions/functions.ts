import mysql from 'mysql2/promise'
export const connectDB=async()=>{
    try{
    const connection=await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'petmanagement',
        port:3307,
        dateStrings:true
    })
    return connection;
}catch(e){
    console.log('Error connecting to Database'+e)
}   
}


