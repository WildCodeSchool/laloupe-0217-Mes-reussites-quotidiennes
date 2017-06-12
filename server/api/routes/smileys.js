import express from 'express';
import Smiley from '../models/smiley.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var smiley = new Smiley();

    router.get('/', Auth.hasAuthorization, smiley.findAll);
    app.use('/smileys', router);

};
