const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    const server = express();
    server.use(bodyParser.urlencoded({extend:true}));
    server.use(bodyParser.json());
    server.use(express.json());
    consign().include('controllers').into(server);
    return server
}