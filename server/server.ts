import App from './app';

App.app.listen(5000, ()=> console.log('Servidor na porta 5000'));
process.once('SIGURRS2', () => App.closeDataBaseConnection('nodemon restart', ()=> process.kill(process.pid, 'SIGURRS2')));
process.on('SIGINT', ()=> App.closeDataBaseConnection('excecução interrompida', () => process.exit(0)));