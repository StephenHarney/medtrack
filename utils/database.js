   import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

<<<<<<< HEAD
  if(isConnected) {
=======
  if(isConnected) {      
>>>>>>> 17e1b51f5bafa9bda9911bf99ebe70f3bda2a1d7
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
 
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}