import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import DataBase from './config/db';
import UserRoutes from './models/user/routes';

class App {
    public app: express.Application;
    private morgan: morgan.Morgan;
    private bodyParse;
    private dataBase: DataBase;
    
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
        this.dataBase = new DataBase();
        this.dataBaseConnection();       
    }

    dataBaseConnection(){
        this.dataBase.createConnection();
    }
    closeDataBaseConnection(message, callback){
        this.dataBase.closeConnection(message, ()=> callback());
    }

    middleware(){
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true}));
    }

    routes(){
        this.app.route('/').get((req, res) => res.status(200).json({'message': 'Olá Mundo!'})); 
        this.app.route('/test').get((req, res) => res.status(200).json({'message': 'Olá Mundo!'})); 
        this.app.route('/api/v1/users').get(UserRoutes.getAll); 
        this.app.route('/api/v1/users/:id').get(UserRoutes.getById); 
        this.app.route('/api/v1/users/').post(UserRoutes.create); 
        this.app.route('/api/v1/users/:id').put(UserRoutes.update);
        this.app.route('/api/v1/users/:id').delete(UserRoutes.delete);
    }
}

export default new App();