import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/27017/users-database');
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.log('❌ MongoDB connection error:', err);
  }
};
export default connectDatabase;
