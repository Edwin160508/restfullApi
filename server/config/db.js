"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var DataBase = /** @class */ (function () {
    function DataBase() {
        this.DB_URI = 'mongodb://127.0.0.1/db';
    }
    DataBase.prototype.createConnection = function () {
        mongoose.connect(this.DB_URI);
        this.log(this.DB_URI);
    };
    DataBase.prototype.closeConnection = function (Message, Callback) {
        this.DB_CONNECTION.close(function () {
            console.log("Mongoose foi desconectado pelo " + Message);
            Callback();
        });
    };
    DataBase.prototype.log = function (uri) {
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on('connected', function () { return console.log("Mogoose est\u00E1 conectado ao " + uri); });
        this.DB_CONNECTION.on('error', function (error) { return console.log.bind(console, "Erro na conex\u00E3o " + error); });
        this.DB_CONNECTION.on('disconected', function () { return console.log("Mogoose est\u00E1 desconectado ao " + uri); });
    };
    return DataBase;
}());
exports["default"] = DataBase;
