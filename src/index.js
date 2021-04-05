import express, {json} from 'express';
import '@babel/polyfill';
import app from './app.js';
import db from './db/db.js';

import usersRoutes from './routes/users.js'


//const app = express();
const PORT = 3000;
//const router = express.Router();


app.use(json()); //app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    res.header("Content-type: application/json; charset=utf-8");
    res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, PATCH, OPTIONS, DELETE');
    res.header('Allow', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');
    next();
  });

app.use('/users', usersRoutes) 


app.get('/', (req, res) => res.send('Hello from homepage XD')); //callback function

async function connectionDB() {
    try {
        await db.authenticate();
        console.log('Connection has been successfully');
    } catch (error) {
        console.error('Unable to connect to the database', error);
    }
}
connectionDB();


app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));