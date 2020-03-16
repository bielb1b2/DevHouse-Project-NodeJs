const { Router } = require('express');
const multer = require('multer');
const uploadCondfig = require('./config/upload');



const SessionController = require('./controllers/SessionController');
const HouseController = require('./controllers/HouseController');

const routes = new Router();
const upload = multer(uploadCondfig);

routes.post('/sessions', SessionController.store);

routes.post('/houses', upload.single('thumbnail') ,HouseController.store);
routes.get('/houses', HouseController.index);
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update)

module.exports = routes;