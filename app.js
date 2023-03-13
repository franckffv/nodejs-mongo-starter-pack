import express from 'express';
import usersRoutes from './routes/users.js';

const app = express();
const API_VERSION = 'v1';

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(`/api/${API_VERSION}/users`, usersRoutes);

export default app;