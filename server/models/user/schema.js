"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    createdAt: { type: Date, "default": Date.now }
});
exports["default"] = UserSchema;
