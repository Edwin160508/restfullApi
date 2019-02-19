import * as mongoose from 'mongoose';

class DataBase {
    private DB_URI = 'mongodb://127.0.0.1/db';
    private DB_CONNECTION;

    constructor(){

    }

    public createConnection(){
        mongoose.connect(this.DB_URI);
        this.log(this.DB_URI);
    }

    public closeConnection(Message, Callback){
        this.DB_CONNECTION.close(()=> {
            console.log(`Mongoose foi desconectado pelo ${Message}`);
            Callback();
        });
    }

    public log(uri){
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on('connected', ()=> console.log(`Mogoose está conectado ao ${uri}`));
        this.DB_CONNECTION.on('error', error => console.log.bind(console, `Erro na conexão ${error}`));
        this.DB_CONNECTION.on('disconected', () => console.log(`Mogoose está desconectado ao ${uri}`));

    }
}

export default DataBase;