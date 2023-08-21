import colors from 'colors';
import mongoose from 'mongoose';

const connectDB = async () => {
  colors.enable();
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoBD connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectDB;
