const { Router } = require('express');
const SessionController = require('./controllers/SessionController');
const HouseController = require('./controllers/HouseController');

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/house', HouseController.store);

module.exports = routes;