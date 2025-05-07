import mongoose from "mongoose";

//Connect to mongodb
const connection= async()=>{
    try {
        const connect= await mongoose.connect(process.env.MONGODB_URI)

console.log(`MongoDB connected:${connect.connection.host}`);


    } catch (error) {
        console.error(`Error:${error.message}`);
        process.exit(1);
        
    }
}
export default connection;