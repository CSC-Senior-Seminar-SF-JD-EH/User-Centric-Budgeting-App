const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "losthost",
    user: "root",
    password: "",
    database: "signup"
})
