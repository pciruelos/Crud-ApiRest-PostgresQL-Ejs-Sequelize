import express, {json} from 'express';
import morgan from 'morgan';
import path from 'path';

//importing other files
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//initialization
const app = express();

//middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;