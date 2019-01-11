var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    password: "password",
    database: "bamazon",
    insecureAuth : true
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as thread id " + connection.threadId);
});