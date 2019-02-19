"use strict";
exports.__esModule = true;
var app_1 = require("./app");
app_1["default"].app.listen(5000, function () { return console.log('Servidor na porta 5000'); });
process.once('SIGURRS2', function () { return app_1["default"].closeDataBaseConnection('nodemon restart', function () { return process.kill(process.pid, 'SIGURRS2'); }); });
process.on('SIGINT', function () { return app_1["default"].closeDataBaseConnection('excecução interrompida', function () { return process.exit(0); }); });
