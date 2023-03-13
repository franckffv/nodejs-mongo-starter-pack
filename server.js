import dotenv from 'dotenv';
import morgan from 'morgan';
import app from './app.js';
import connectDB from './config/db.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
app.use(morgan('dev'));

connectDB();

const PORT = process.env.PORT || 8080;

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Running on port http://localhost:${PORT}`);
});